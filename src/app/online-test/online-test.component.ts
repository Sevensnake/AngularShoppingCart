import { Component, OnInit } from '@angular/core';
import {OnlineTestService} from '../services/online-test.service';
import { questions } from '../shared/questions';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-online-test',
  templateUrl: './online-test.component.html',
  styleUrls: ['./online-test.component.scss']
})
export class OnlineTestComponent implements OnInit {
  quest: questions[] = [];

  constructor(private fb: FormBuilder,private testservice: OnlineTestService,   private router: Router) { 
    this.testservice.getJSON()
    .subscribe(resData=>  {
      this.quest =resData.questions
  
    });
  }

  ngOnInit() {
    localStorage.clear();
  this.testservice.getJSON()
  .subscribe(resData=>  {
    this.quest =resData.questions

  });
  }
  onItemChange(event, plus, group) {
    console.clear();
    if (group === 0) {
      localStorage.removeItem('0');
      console.log(event, plus, group);
      localStorage.setItem('0', plus);
    }
    if (group === 1) {
      localStorage.removeItem('1');
      console.log(event, plus, group);
      localStorage.setItem('1', plus);
    }
    if (group === 2) {
      localStorage.removeItem('2');
      console.log(event, plus, group);
      localStorage.setItem('2', plus);
    }
    if (group === 3) {
      localStorage.removeItem('3');
      console.log(event, plus, group);
      localStorage.setItem('3', plus);
    }
/*     console.clear();
    console.log(event, plus); */
  }
  submit() {
       this.router.navigate(['registration']);
  }
}
