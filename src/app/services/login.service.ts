import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { USER_CRED } from '../constants/urls';
import { User } from '../Interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  sendUserData(userData:User){
    return this.http.post(USER_CRED,userData);
  }

  getUserData(){
    return this.http.get(USER_CRED);
  }
}
