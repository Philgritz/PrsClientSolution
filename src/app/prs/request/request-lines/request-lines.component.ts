import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Request } from '../request.class';
import { SystemService } from '../../system/system.service';
import { User } from '../../user/user.class';
import { ActivatedRoute } from '@angular/router';
import { RequestlineService } from '../../requestline/requestline.service';


@Component({
  selector: 'app-request-lines',
  templateUrl: './request-lines.component.html',
  styleUrls: ['./request-lines.component.css']
})
export class RequestLinesComponent implements OnInit {

  
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
    
  ) { }

  delete(): void {
    this.requestsvc.remove(this.request).subscribe(
      res => {
        console.log("Request delete res:", res);
        //this.router.navigateByUrl("/requests/list");
      },
      err => console.error(err)
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

 




    // this.requestsvc.list().subscribe(
    //   xxx => {
    //     this.requests = xxx;
    //     console.log("Requests-", xxx);
    //   },
    //   err => {
    //     console.error(err);
    //   }
    // );

  }

}

