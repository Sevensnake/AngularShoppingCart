import { Component, OnInit, Inject } from '@angular/core';
import { Tools } from '../shared/tools';
import { HardwaretoolsService } from '../services/hardwaretools.service';
import {flyInOut, expand} from '../animations/app.animations';

@Component({
  selector: 'app-hardwaremain',
  templateUrl: './hardwaremain.component.html',
  styleUrls: ['./hardwaremain.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display:block;'
  },
  animations: [
    flyInOut(), expand()
  ]
})
export class HardwaremainComponent implements OnInit {
  tool: Tools[];
  imgsize: string;
errorMsg: string;
  constructor(private toolservice: HardwaretoolsService,  @Inject('baseURL') private baseURL) { }

  ngOnInit() {
    this.toolservice.getTooles().subscribe((tool) => this.tool = tool,
    errorMsg => this.errorMsg = <any>errorMsg);

  }
}
