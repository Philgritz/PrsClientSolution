import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user.class';
import { SystemService } from '../../system/system.service';
import { clearModulesForTest } from '@angular/core/src/linker/ng_module_factory_loader';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  username: string;
  password: string;
  user: User;
  users: User[] = [];
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
    private route: ActivatedRoute,
    private router: Router,
    private usersvc: UserService,
    private syssvc: SystemService
  ) { }

 

  userlogin() {
    this.usersvc.login(this.username, this.password).subscribe(
      res => { 
      console.log("Res from userlogin:", res); 

    this.syssvc.setUser(res)

      
      //res will have user instance in it.  
      //use res to set user to store user in system service as a parameter when you call setUser.
      //once user is set, you can navigate wherever you want to go. 
      //need to inject SS into all other components, set local property in component to getUser.


      
      this.router.navigateByUrl("/requests/list");
      
    }
    ,err => { console.error(err);}
    

    );
  }

  ngOnInit() {
    
  }

}

