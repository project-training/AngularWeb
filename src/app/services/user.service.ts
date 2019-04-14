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
    return this.httpClient.post(environment.apiBaseUrl + '/register', user)
  }

  login(authCredentials) {
    return this.httpClient.post(environment.apiBaseUrl + '/authenticate', authCredentials);
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }
}
