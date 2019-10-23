import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './prs/user/user-list/user-list.component';
import { BooldispPipe } from './core/pipes/booldisp.pipe';
import { FourOhFourComponent } from './core/four-oh-four/four-oh-four.component';
import { UserDetailComponent } from './prs/user/user-detail/user-detail.component';
import { UserCreateComponent } from './prs/user/user-create/user-create.component';
import { UserEditComponent } from './prs/user/user-edit/user-edit.component';
import { MenuComponent } from './core/menu/menu.component';
import { MenuitemComponent } from './core/menuitem/menuitem.component';
import { SortPipe } from './core/pipes/sort.pipe';
import { SearchUserPipe } from './core/pipes/search-user.pipe';
import { VendorListComponent } from './prs/vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './prs/vendor/vendor-detail/vendor-detail.component';
import { VendorCreateComponent } from './prs/vendor/vendor-create/vendor-create.component';
import { VendorEditComponent } from './prs/vendor/vendor-edit/vendor-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    BooldispPipe,
    FourOhFourComponent,
    UserDetailComponent,
    UserCreateComponent,
    UserEditComponent,
    MenuComponent,
    MenuitemComponent,
    SortPipe,
    SearchUserPipe,
    VendorListComponent,
    VendorDetailComponent,
    VendorCreateComponent,
    VendorEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
