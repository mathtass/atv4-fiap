import { Component, OnInit } from '@angular/core';
import { users } from 'src/app/users';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users = users;
  constructor(){}
  ngOnInit(): void {      
  }
  share(){
    alert("Bilhete Comprado")
  }
  onNotify(){
    alert("Bilhete Utilizado")
  }
}
