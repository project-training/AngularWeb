import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

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



  constructor(private httpClient: HttpClient) { }

  postUser(user: User) {
    this.httpClient.post(environment.apiBaseUrl + '/register', user)
  }
}
