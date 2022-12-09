import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class User {
  id:number
  name : string
  email : string
  password : string
}

export const USERS : User[] =[
  {
    id : 1,
    name : "name",
    email : "email",
    password : "pass"
  },
  {
    id : 2,
    name : "name 2",
    email : "email 2",
    password : "pass 2"
  },
  {
    id : 3,
    name : "name 3",
    email : "email 3",
    password : "pass 3"
  },
  {
    id : 4,
    name : "name 4",
    email : "email 4",
    password : "pass 4"
  }
]
