import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FourOhFourComponent } from './core/four-oh-four/four-oh-four.component';
//users
import { UserListComponent } from './prs/user/user-list/user-list.component';
import { UserCreateComponent } from './prs/user/user-create/user-create.component';
import { UserDetailComponent } from './prs/user/user-detail/user-detail.component';
import { UserEditComponent } from './prs/user/user-edit/user-edit.component';

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


const routes: Routes = [
  
  //users
  { path: '', redirectTo: '/users/list', pathMatch: 'full'},

  { path:'users/list', component: UserListComponent },
  { path:'users/create', component: UserCreateComponent },
  { path:'users/detail/:id', component: UserDetailComponent },
  { path:'users/edit/:id', component: UserEditComponent },

  //vendors
  { path: '', redirectTo: '/vendors/list', pathMatch: 'full'},

  { path:'vendors/list', component: VendorListComponent },
  { path:'vendors/create', component: VendorCreateComponent },
  { path:'vendors/detail/:id', component: VendorDetailComponent },
  { path:'vendors/edit/:id', component: VendorEditComponent },
  
  //products
  { path: '', redirectTo: '/vendors/list', pathMatch: 'full'},

  { path:'products/list', component: ProductListComponent },
  { path:'products/create', component: ProductCreateComponent },
  { path:'products/detail/:id', component: ProductDetailComponent },
  { path:'products/edit/:id', component: ProductEditComponent },


  { path: '**', component: FourOhFourComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
