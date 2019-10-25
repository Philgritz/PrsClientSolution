import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product.class';
import { VendorService } from '../../vendor/vendor.service';
import { Vendor } from '../../vendor/vendor.class';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: Product;
  vendors: Vendor[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productsvc: ProductService,
    private vendorsvc: VendorService
  ) { }

  save(): void {
    this.productsvc.change(this.product).subscribe(
      res => { console.log("Product change resp: ", res); 
    this.router.navigateByUrl("/products/list");
    }
    ,err => { console.error(err);}
    );
  }

  ngOnInit() {
    let productid = this.route.snapshot.params.id;   //how to pull id
    this.productsvc.get(productid).subscribe(
      product => { 
        this.product = product;
        console.log("Product:", product); 
      }
      ,err => { console.error(err); }
    );
    this.vendorsvc.list().subscribe(
      vendors => {
        this.vendors = vendors;
      }
    );
  }

}
