import { Injectable } from '@angular/core';
import { baseURL } from '../shared/baseURL';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { ProcessHTTPMsgServiceService } from '../process-httpmsg-service.service';
import {Tools} from '../shared/tools';
import { delay, map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HardwaretoolsService {
  
  constructor(private http: HttpClient, private processhttpmsg: ProcessHTTPMsgServiceService) { }

  getTooles(): Observable<Tools[]> {
    return this.http.get<Tools[]>(baseURL + 'TOOLSLIST').pipe(catchError(this.processhttpmsg.handleError));
  }

  getTools(id: number): Observable<Tools> {
    return this.http.get<Tools>(baseURL + 'TOOLSLIST/' + id).pipe(catchError(this.processhttpmsg.handleError));
  }

  gettoolsIds(): Observable<number[] | any> {
    return this.getTooles().pipe(map(tooles => tooles.map(tooles => tooles.id))).pipe(catchError(this.processhttpmsg.handleError));
  }
}
