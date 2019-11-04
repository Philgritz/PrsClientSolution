import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Request } from '../request.class';
import { SystemService } from '../../system/system.service';
import { User } from '../../user/user.class';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestlineService } from '../../requestline/requestline.service';
import { Requestline } from '../../requestline/requestline.class';

@Component({
  selector: 'app-request-review-item',
  templateUrl: './request-review-item.component.html',
  styleUrls: ['./request-review-item.component.css']
})
export class RequestReviewItemComponent implements OnInit {

  requestline: Requestline;
  request: Request;
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

    private route: ActivatedRoute,
    private router: Router,
    private requestsvc: RequestService,
    private syssvc: SystemService,
    private requestlinesvc: RequestlineService
  ) { }

  setasapproved(): void {
    let aprv = this.route.snapshot.params.id;  //read route for id, read db for user
    this.requestsvc.setapprove(aprv).subscribe(
      request => {
        this.request = request;
        console.log("request status??", request);
        this.router.navigateByUrl("/requests/review/list");
      }
    )
  }

  setasrejected(): void {
    let rej = this.route.snapshot.params.id;  //read route for id, read db for user
    this.requestsvc.setreject(rej).subscribe(
      request => {
        this.request = request;
        console.log("request status??", request);
        this.router.navigateByUrl("/requests/review/list");
      }
    )
  }
  
  

  ngOnInit() {

    let requestid = this.route.snapshot.params.id;  //read route for id, read db for user
    
    this.requestsvc.get(requestid).subscribe(
      request => {
        this.request = request;
        console.log("REQEST:", request);
      },
      err => { console.error(err); }
    );
  }

}
