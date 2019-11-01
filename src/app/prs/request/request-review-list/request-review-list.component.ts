import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Request } from '../request.class';
import { SystemService } from '../../system/system.service';
import { User } from '../../user/user.class';

@Component({
  selector: 'app-request-review-list',
  templateUrl: './request-review-list.component.html',
  styleUrls: ['./request-review-list.component.css']
})
export class RequestReviewListComponent implements OnInit {

  user: User;
  request: Request;
  loggedinname: User;
  loggedinusername: string;
  requests: Request[] = [];
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
    private requestsvc: RequestService,
    private syssvc: SystemService
  ) { }

  ngOnInit() {
    this.requestsvc.list().subscribe(
      xxx => { 
        this.requests = xxx;
        console.log("Requests-", xxx);
      },
      err => {
        console.error(err);
      }
    );
    

    this.syssvc.checkLogin(this.loggedinname);
    
    this.request.userId = this.syssvc.loggedinuser.id;
    this.loggedinusername = this.syssvc.loggedinuser.username;

  
    









  }

}

