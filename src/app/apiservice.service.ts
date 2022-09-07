import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { post } from './user';
import users from './userdata';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  posts:any;
  apiURL= "https://jsonplaceholder.typicode.com/posts";
    httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',

    })
  };

  constructor(private httpClient: HttpClient) {}
  public createpost(data:post):Observable<post>{
    return this.httpClient.post<post>(this.apiURL, data,this.httpOptions)
  }
   getPosts(){
    return this.httpClient.get(this.apiURL);
    // const data:post={}
    // // :post=
    // //   {
    // //   userId: "1",
    // //   id: "1",
    // //   title: "tittle 1",
    // //   body: "body 1"
    // // }
  
    // return data;
   }
}
