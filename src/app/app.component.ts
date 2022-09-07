import { Component } from '@angular/core';
import { ApiserviceService } from './apiservice.service';
import { post } from './user';
import users from './userdata';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testapp1';
  totalposts:any;
  newusers={userId: "1101",
    id: "1011",
    title: "title",
    body: "body "}
  constructor(private apiservice: ApiserviceService) {}
  ngOnInit():void{
    this.apiservice.getPosts().subscribe((data: any) => {this.totalposts = data
      console.warn(this.totalposts);
     this.apiservice.createpost(this.newusers).subscribe(data => this.totalposts.push(data));
    console.log("name", this.totalposts[0].title);
    })
}}