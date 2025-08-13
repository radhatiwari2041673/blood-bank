import { NgModule } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DonorComponent } from './donor/donor.component';
import { FormGroup } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import bootstrap from '../main.server';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AcceptorComponent } from './acceptor/acceptor.component';
import { HomepageComponent } from './homepage/homepage.component';




@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DonorComponent,
    AcceptorComponent,
    AppComponent,
    // RouterModule.forRoot(routes),
    AppRoutingModule
  ],
  providers: [
  ]
})
export class AppModule { 
  
}