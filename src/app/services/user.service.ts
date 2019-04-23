import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User = {
    fullName: '',
    email: '',
    password: ''
  }

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(private httpClient: HttpClient) { }

  postUser(user: User) {
    return this.httpClient.post(environment.apiBaseUrlNodeJs + '/register', user, this.noAuthHeader)
  }

  login(authCredentials) {
    return this.httpClient.post(environment.apiBaseUrlNodeJs + '/authenticate', authCredentials, this.noAuthHeader);
  }

  getUserProfile() {
    return this.httpClient.get(environment.apiBaseUrlNodeJs + '/userProfile');
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  getUserPayload() {
    var token = this.getToken();
    if (token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else
      return null;
  }

  isLoggedIn() {
    var userPayload = this.getUserPayload();
    if (userPayload)
      return userPayload.exp > Date.now() / 1000;
    else
      return false;
  }
}
