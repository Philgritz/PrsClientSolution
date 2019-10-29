import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user.class';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  username: string;
  password: string;
  user: User;
  users: User[] = [];
  sortCriteria: string = "lastname";
  sortOrder: string = "desc";
  searchCriteria: string = "";

  sortBy(prop: string): void {
    if(this.sortCriteria === prop) {
      this.sortOrder = this.sortOrder === 'desc' ? 'asc' : 'desc';
    }
    this.sortCriteria = prop;
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usersvc: UserService
  ) { }

 

  userlogin() {
    this.usersvc.login(this.username, this.password).subscribe(
      res => { 
      console.log("Res from userlogin:", res); 
      
    }

    );
  }

  ngOnInit() {
  }

}

// ngOnInit() {
//   let userid = this.route.snapshot.params.id;   //how to pull id
//   this.usersvc.get(userid).subscribe(
//     user => { 
//       this.user = user;
//       this.password2 = this.user.password; 
//       console.log("User:", user); }
//     ,err => { console.error(err); }
//   );
