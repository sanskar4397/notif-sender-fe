import { Component, OnInit } from '@angular/core';
import { User, USERS } from '../models';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  selectedHero : User;
  constructor() { }
  // user : User  = {
  //   id : 1,
  //   name : "name",
  //   email : "email",
  //   password : "pass"
  // };
  ngOnInit(): void {

  }
 users = USERS;

 onSelect(user){
  this.selectedHero = user;
 }
}
