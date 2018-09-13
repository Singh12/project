import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
serverArray = [10, 20, 30, 40];
addId: number;
serverIds: number;
  constructor() {
    this.addId = 0;
    this.serverIds = 0;
   }

  ngOnInit() {
  }
  addMore() {
    console.log(typeof(this.addId));
      this.serverArray.push(this.addId);
  }
}
