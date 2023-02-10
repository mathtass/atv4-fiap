import { Component, EventEmitter,Input, Output,OnInit } from '@angular/core';

@Component({
  selector: 'app-users-alert',
  templateUrl: './users-alert.component.html',
  styleUrls: ['./users-alert.component.css']
})
export class UsersAlertComponent implements OnInit {
  @Input() user: any;
  @Output() notify = new EventEmitter();
  constructor(){}
  ngOnInit():void{}

}
