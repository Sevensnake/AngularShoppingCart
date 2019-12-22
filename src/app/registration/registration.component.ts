import { Component, OnInit } from '@angular/core';
import { OnlineTestService } from '../services/online-test.service';
import { answers } from '../shared/answers';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  quest: answers[] = [];
  selectoption: string;
  answerquiz: any;
  constructor(private testservice: OnlineTestService, private router: Router, ) { }

  ngOnInit() {

    this.testservice.getanswer()
      .subscribe(resData => {
        resData.answers.forEach(d => {
          if (d.answer.answer === localStorage.getItem('0')) {
          d.selectoption = 'correct';
          } else {
           d.your = localStorage.getItem('0')
          }
         
          if (d.answer.answer === localStorage.getItem('1')) {
            d.selectoption = 'correct';
          } 
         
            if (d.answer.answer === localStorage.getItem('2')) {
              d.selectoption = 'correct';
            } 
           
        })
        this.quest = resData.answers;
      });
  }


}
