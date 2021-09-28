import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './partials/error/error.component';
import { PiHeaderComponent } from './partials/pi-header/pi-header.component';
import { PuHeaderComponent } from './partials/pu-header/pu-header.component';
import { SideMenuComponent } from './partials/side-menu/side-menu.component';
import { TokenInterceptorProvider } from './_helpers/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    PuHeaderComponent,
    PiHeaderComponent,
    SideMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TokenInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
