import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../request.service';
import { Request } from '../request.class';
import { SystemService } from '../../system/system.service';


@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit {

  request: Request;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private requestsvc: RequestService,
    private syssvc: SystemService
  ) { }


  save(): void {
  
    this.requestsvc.change(this.request).subscribe(
      res => { console.log("User change resp: ", res); 
    this.router.navigateByUrl("/requests/list");
    }
    ,err => { console.error(err);}
    );
  }

  ngOnInit() {
    let rqstid = this.route.snapshot.params.id;   //how to pull id
    this.requestsvc.get(rqstid).subscribe(
      request => { 
        this.request = request;
        console.log("REQEST:", request); }
      ,err => { console.error(err); }
    );
  }

}
