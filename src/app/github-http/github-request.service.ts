import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import "rxjs/add/operator/map";
import { map } from "rxjs/operators"; 
// import { from, Observable } from 'rxjs';
// import { map } from 'rxjs-compat/operator/map';
import { Repository } from '../repository';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class GithubRequestService {
  username:string

  constructor(private http: HttpClient) {

    this.username =  "Evalinemacharia"

  }
  getUser(){
    return this.http.get('https://api.github.com/users/' + this.username).pipe(map(result=>result))
  }
  findRepo(){
    return this.http.get('https://api.github.com/users/' + this.username + '/repos').pipe(map(result=>result))
  }
  update(username:string){
    this.username = username
  }
}  
  

