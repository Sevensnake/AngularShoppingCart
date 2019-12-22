import { Injectable } from '@angular/core';
import {of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Http } from '@angular/http';
import  {questions} from './shared/questions';
@Injectable()
export class OnlineTestService {
 // add setters and gettrers  according to your usage
 viewquestions: any[];
  private jsonURL = '../assets/questions.json';
constructor(private http: Http) {
}
   public getJSON(): Observable<questions> {
  return this.http.get(this.jsonURL)
   .map((response:any) => response.json());
}
}
