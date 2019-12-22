import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {questions} from '../shared/questions';
@Injectable({
  providedIn: 'root'
})
export class OnlineTestService {
  private jsonURL = '../assets/questions.json';
  private anserURL = '../assets/answers.json';
  constructor(private http: Http) {
    this.getJSON().subscribe(data => this.jsonURL = data, error => console.log(error));
    this.getanswer().subscribe(data => this.jsonURL = data, error => console.log(error));
  }
  public getJSON(): Observable<any> {
    return this.http.get(this.jsonURL)
                    .map((res:any) => res.json());
  
  }
  public getanswer(): Observable<any> {
    return this.http.get(this.anserURL)
                    .map((res:any) => res.json());
  
  }
}