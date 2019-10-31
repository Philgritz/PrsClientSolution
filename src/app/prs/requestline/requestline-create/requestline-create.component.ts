import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestlineService } from '../requestline.service';
import { Requestline } from '../requestline.class';
import { ProductService } from '../../product/product.service';
import { Product } from '../../product/product.class';
import { SystemService } from '../../system/system.service';
import { Request } from '../../request/request.class';
import { User } from '../../user/user.class';
import { RequestService } from '../../request/request.service';

@Component({
  selector: 'app-requestline-create',
  templateUrl: './requestline-create.component.html',
  styleUrls: ['./requestline-create.component.css']
})
export class RequestlineCreateComponent implements OnInit {

  requestline: Requestline = new Requestline;
  products: Product[] = [];
  loggedinname: User;
  loggedinusername: string;
  request: Request

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productsvc: ProductService,
    private requestlinesvc: RequestlineService,
    private syssvc: SystemService,
    private requestsvc: RequestService
    
    
  ) { }

  save(): void {
    this.requestlinesvc.create(this.requestline).subscribe(
      res => { console.log("Product change resp: ", res); 
    this.router.navigateByUrl("/requests/list");    //change to specific request later
    }
    ,err => { console.error(err);}
    );
  }



  ngOnInit() {


    let requestid = this.route.snapshot.params.id;  //read route for id, read db for user
    this.requestsvc.get(requestid).subscribe(
      request => {
        this.request = request;
        console.log("REQEST:", request);
        console.log("test", requestid);
      this.requestline.requestId = requestid;
        
      },
      err => { console.error(err); }
    );



    this.productsvc.list().subscribe(
      products => {
        this.products = products;
      }
    );

    this.syssvc.checkLogin(this.loggedinname);
    
    this.request.userId = this.syssvc.loggedinuser.id;
    this.loggedinusername = this.syssvc.loggedinuser.username;



  }

}
