import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: number;
  userActivated:boolean=false

  constructor(private route:activatedroute private UserService:UserService){

  }
  

  ngOnInit() {
    this.UserService.activateduser
    .subscribe(
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
    });
   
  }
  onactivate(){
    this.UserService.activateduser.emit(true)  
  }
}

