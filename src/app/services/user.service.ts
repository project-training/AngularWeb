import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User = {
    userName: '',
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }

  constructor() { }
}
