import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
 /*To list all users*/
  getUsers(){
   return this.http.get('https://jsonplaceholder.typicode.com/users');
 }

 /*To get user specific details*/
 getUser(userId){
   return this.http.get("https://jsonplaceholder.typicode.com/users/"+userId);
 }

 getPosts(){
   return this.http.get("https://jsonplaceholder.typicode.com/posts");
 }

}
