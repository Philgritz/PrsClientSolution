import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { VendorService } from '../vendor.service';
import { Vendor} from '../vendor.class';
import { SystemService } from '../../system/system.service';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {

  vendor: Vendor;
  verifyDelete: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private vendorsvc: VendorService,
    private syssvc: SystemService
  ) { }

  edit(): void {
    this.router.navigateByUrl(`/vendors/edit/${this.vendor.id}`);
  }
  verify(): void {
    this.verifyDelete = !this.verifyDelete;
  }
  delete(): void {
    this.vendorsvc.remove(this.vendor).subscribe(
      res => {
        console.log("Vendor delete res:", res);
        this.router.navigateByUrl("/vendors/list");
      },
      err => console.error(err)
    );
  }


  ngOnInit() {
    let vendorid = this.route.snapshot.params.id;  //read route for id, read db for user
    this.vendorsvc.get(vendorid).subscribe(
      vendor => {
        this.vendor = vendor;
        console.log("VENDOR:", vendor);
      },
      err => { console.error(err); }
    );
  }

}