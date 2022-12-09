import { Injectable } from '@angular/core';
import { User } from './models.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user : User
  constructor() { }



}
