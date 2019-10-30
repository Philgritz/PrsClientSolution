import { Component, OnInit } from '@angular/core';
import { Menu } from './menu.class';
import { SystemService } from '../../prs/system/system.service';
import { User } from 'src/app/prs/user/user.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  user: User;
  username: string;

  menus: Menu[] = [
    { display: 'PRS', link: '/home', tip: 'Home page'},
    { display: 'Users', link: '/users/list', tip: 'User list'},
    { display: 'Vendors', link: '/vendors/list', tip: 'Vendor list'},
    { display: 'Products', link: '/products/list', tip: 'Product list'},
    { display: 'Requests', link: '/requests/list', tip: 'Request list'},
    { display: 'Reviews', link: '/requests/review/list', tip: 'Requests to be reviewed'},
    { display: 'About', link: '/about', tip: 'About me'},
    { display: 'Login/out', link: '/login', tip: 'Login'},
 
  ];

  constructor(
    private syssvc: SystemService
  ) { }

  ngOnInit() {
    
  }

}
