import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListUserComponentComponent } from './list-user-component./list-user-component..component';
import { ListUserComponent } from './list-user/list-user.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AccountListComponent } from './account-list/account-list.component';
import { SlideComponent } from './slide/slide.component';


@NgModule({
  declarations: [
    AppComponent,
    ListUserComponentComponent,
    ListUserComponent,
    FooterComponent,
    NavbarComponent,
    AccountListComponent,
    SlideComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
