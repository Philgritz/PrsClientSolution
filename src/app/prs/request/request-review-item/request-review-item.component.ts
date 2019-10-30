import { Component, OnInit } from '@angular/core';
import { SystemService } from '../../system/system.service';

@Component({
  selector: 'app-request-review-item',
  templateUrl: './request-review-item.component.html',
  styleUrls: ['./request-review-item.component.css']
})
export class RequestReviewItemComponent implements OnInit {

  constructor() { }
  
  private syssvc: SystemService

  ngOnInit() {
  }

}
