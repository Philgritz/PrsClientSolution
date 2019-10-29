import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FourOhFourComponent } from './core/four-oh-four/four-oh-four.component';
//users
import { UserListComponent } from './prs/user/user-list/user-list.component';
import { UserCreateComponent } from './prs/user/user-create/user-create.component';
import { UserDetailComponent } from './prs/user/user-detail/user-detail.component';
import { UserEditComponent } from './prs/user/user-edit/user-edit.component';
import { UserLoginComponent } from './prs/user/user-login/user-login.component';

//vendors
import { VendorListComponent } from './prs/vendor/vendor-list/vendor-list.component';
import { VendorCreateComponent } from './prs/vendor/vendor-create/vendor-create.component';
import { VendorDetailComponent } from './prs/vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './prs/vendor/vendor-edit/vendor-edit.component';

//products
import { ProductListComponent } from './prs/product/product-list/product-list.component';
import { ProductCreateComponent } from './prs/product/product-create/product-create.component';
import { ProductDetailComponent } from './prs/product/product-detail/product-detail.component';
import { ProductEditComponent } from './prs/product/product-edit/product-edit.component';

//requests
import { RequestListComponent } from './prs/request/request-list/request-list.component';
import { RequestCreateComponent } from './prs/request/request-create/request-create.component';
import { RequestDetailComponent } from './prs/request/request-detail/request-detail.component';
import { RequestEditComponent } from './prs/request/request-edit/request-edit.component';

//request review
import { RequestReviewItemComponent } from './prs/request/request-review-item/request-review-item.component';
import { RequestReviewListComponent } from './prs/request/request-review-list/request-review-list.component';


const routes: Routes = [
  
  //users
  { path: '', redirectTo: '/users/list', pathMatch: 'full'},  //change to point to login

  { path:'users/list', component: UserListComponent },
  { path:'users/create', component: UserCreateComponent },
  { path:'users/detail/:id', component: UserDetailComponent },
  { path:'users/edit/:id', component: UserEditComponent },
  { path:'login', component: UserLoginComponent },

  //vendors
  { path: '', redirectTo: '/vendors/list', pathMatch: 'full'},

  { path:'vendors/list', component: VendorListComponent },
  { path:'vendors/create', component: VendorCreateComponent },
  { path:'vendors/detail/:id', component: VendorDetailComponent },
  { path:'vendors/edit/:id', component: VendorEditComponent },
  
  //products
  { path: '', redirectTo: '/products/list', pathMatch: 'full'},

  { path:'products/list', component: ProductListComponent },
  { path:'products/create', component: ProductCreateComponent },
  { path:'products/detail/:id', component: ProductDetailComponent },
  { path:'products/edit/:id', component: ProductEditComponent },
 
  //requests
  { path: '', redirectTo: '/requests/list', pathMatch: 'full'},

  { path:'requests/list', component: RequestListComponent },
  { path:'requests/create', component: RequestCreateComponent },
  { path:'requests/detail/:id', component: RequestDetailComponent },
  { path:'requests/edit/:id', component: RequestEditComponent },
  //request review
  { path:'requests/review/list', component: RequestReviewListComponent },
  { path:'requests/review/item/:id', component: RequestReviewItemComponent },


  { path: '**', component: FourOhFourComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
