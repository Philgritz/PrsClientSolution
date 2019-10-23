import { Component } from '@angular/core';
import { UserService } from './prs/user/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(private usersvc: UserService) {
    this.usersvc.list().subscribe(
      users => console.log(users)
    );
  }

}
