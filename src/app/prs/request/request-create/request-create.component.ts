import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from '../request.service';
import { Request } from '../request.class';
import { SystemService } from '../../system/system.service';
import { User } from '../../user/user.class';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {

  request: Request = new Request();
  loggedinname: User;
  loggedinusername: string;
  
  constructor(
    private router: Router,
    private requestsvc: RequestService,
    private syssvc: SystemService
  ) { }

  save(): void {
    this.requestsvc.create(this.request).subscribe(
      res => { 
      console.log("Res from Request create:", res); 
      this.router.navigateByUrl('/requests/list');
    }
    ,err => {console.log(err);}
    );
  }

  ngOnInit() {

    

    // this.syssvc.checkLogin(this.loggedinname);

    // console.log("this logged in name is", this.loggedinname);
    
    
    // this.request.userId = this.syssvc.loggedinuser.id;

    
    this.loggedinusername = this.syssvc.loggedinuser.username;

    console.log("this logged in username is----", this.loggedinusername);
   
  }

}