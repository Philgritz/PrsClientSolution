import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VendorService } from '../vendor.service';
import { Vendor } from '../vendor.class';
import { SystemService } from '../../system/system.service';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {

  vendor: Vendor = new Vendor();
  

  constructor(
    private router: Router,
    private vendorsvc: VendorService,
    private syssvc: SystemService
  ) { }

  save(): void {
    this.vendorsvc.create(this.vendor).subscribe(
      res => { 
      console.log("Res from Vendor create:", res); 
      this.router.navigateByUrl('/vendors/list');
    }

    );
  }

  ngOnInit() {
  }

}
