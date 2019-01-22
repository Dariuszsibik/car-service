import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CarsModule, CarsRoutingModule, CarsService } from './cars';
import {CoreModule} from "./core-module/core.module";
import {CarsListComponent} from "./cars/cars-list/cars-list.component";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import { LoginModule } from './login/login.module';
import { LoginRoutingModule } from './login/login-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CarsModule,
    LoginModule,
    CoreModule,
    AppRoutingModule,
    CarsRoutingModule,
    LoginRoutingModule
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})

export class AppModule {}

