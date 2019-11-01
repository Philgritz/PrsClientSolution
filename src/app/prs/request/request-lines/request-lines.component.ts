import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Request } from '../request.class';
import { SystemService } from '../../system/system.service';
import { User } from '../../user/user.class';
import { ActivatedRoute } from '@angular/router';
import { RequestlineService } from '../../requestline/requestline.service';
import { Requestline } from '../../requestline/requestline.class';


@Component({
  selector: 'app-request-lines',
  templateUrl: './request-lines.component.html',
  styleUrls: ['./request-lines.component.css']
})
export class RequestLinesComponent implements OnInit {

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
    private requestsvc: RequestService,
    private syssvc: SystemService,
    private requestlinesvc: RequestlineService
    
  ) { }

  //delete RL
  delete(line: Requestline): void {
    
    this.requestlinesvc.remove(line).subscribe(

      // this.requestsvc.refresh(requestid).subscribe(
      //   request => {
      //     this.request = request;
      //   }

      // )
      



    );
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

