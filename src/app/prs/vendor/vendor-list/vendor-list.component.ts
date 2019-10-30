import { Component, OnInit } from '@angular/core';
import { VendorService } from '../vendor.service';
import { Vendor } from '../vendor.class';
import { SystemService } from '../../system/system.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

  vendors: Vendor[] = [];
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
    private vendorsvc: VendorService,
    private syssvc: SystemService
  ) { }

  ngOnInit() {
    this.vendorsvc.list().subscribe(
      vendors => {
        this.vendors = vendors;
        console.log("Vendors-", vendors);
      },
      err => {
        console.error(err);
      }
    );
  }

}

