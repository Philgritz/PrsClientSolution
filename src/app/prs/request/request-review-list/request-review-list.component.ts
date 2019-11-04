import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Request } from '../request.class';
import { SystemService } from '../../system/system.service';
import { User } from '../../user/user.class';
import { Router } from '@angular/router';


@Component({
  selector: 'app-request-review-list',
  templateUrl: './request-review-list.component.html',
  styleUrls: ['./request-review-list.component.css']
})
export class RequestReviewListComponent implements OnInit {

  // user: User;
  // request: Request;
  loggedinname: User;
  currentuserid: number;
  loggedinusername: string;
   requests: Request[] = [];
  request: Request = new Request();
  // sortCriteria: string = "lastname";
  // sortOrder: string = "desc";
  // searchCriteria: string = "";

  // sortBy(prop: string): void {
  //   if(this.sortCriteria === prop) {
  //     this.sortOrder = this.sortOrder === 'desc' ? 'asc' : 'desc';
  //   }
  //   this.sortCriteria = prop;
  // }

  constructor(
    private router: Router,
    private requestsvc: RequestService,
    private syssvc: SystemService
  ) { }

  ngOnInit() {
    
    
    this.syssvc.checkLogin(this.loggedinname);
    
    //this.request.userId = this.syssvc.loggedinuser.id;
    this.currentuserid = this.syssvc.loggedinuser.id;
    this.loggedinusername = this.syssvc.loggedinuser.username;


    console.log("this loggedinusename is -----", this.loggedinusername)

    
    this.requestsvc.list().subscribe(
      xxx => { 
        this.requests = xxx;
        console.log("Requests-", xxx);
      },
      err => {
        console.error(err);
      }
      );

      
      
      


  
    






  }

}

