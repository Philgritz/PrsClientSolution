import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestlineService } from '../requestline.service';
import { Requestline } from '../requestline.class';
import { ProductService } from '../../product/product.service';
import { Product } from '../../product/product.class';

@Component({
  selector: 'app-requestline-edit',
  templateUrl: './requestline-edit.component.html',
  styleUrls: ['./requestline-edit.component.css']
})
export class RequestlineEditComponent implements OnInit {

  requestline: Requestline;
  products: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productsvc: ProductService,
    private requestlinesvc: RequestlineService
  ) { }

  save(): void {
    this.requestlinesvc.change(this.requestline).subscribe(
      res => { console.log("Product change resp: ", res); 
    this.router.navigateByUrl("/requests/list");    //change to specific request later
    }
    ,err => { console.error(err);}
    );
  }

  ngOnInit() {

    let requestlineid = this.route.snapshot.params.id;   //how to pull id
    this.requestlinesvc.get(requestlineid).subscribe(
      requestline => { 
        this.requestline = requestline;
        console.log("REquestline:", requestline); 
      }
      ,err => { console.error(err); }
    );

    
    this.productsvc.list().subscribe(
      products => {
        this.products = products;
      }
    );
  }

}
