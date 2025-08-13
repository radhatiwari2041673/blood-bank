import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { DonorComponent } from "./donor/donor.component";
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
import { AcceptorComponent } from "./acceptor/acceptor.component"; 
import { HomepageComponent } from './homepage/homepage.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  //  NgIf, DonorComponent, CommonModule, AcceptorComponent, 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
    // Code to run on component load
  //}
})
export class AppComponent {
  // showDonorComponent: boolean = false;  
  navigateToPage() {
    // this.router.navigate(['/donor']);
    // this.router.navigate(['/acceptor']);
    // this.router.navigate(['/homepage']);
    // this.showDonorComponent = true;
  }
  // onShowDonor() {
  //   this.showDonorComponent = true; // Set to true to show the component
  // }

  title = 'blood-bank-app';
  constructor(private router: Router) {}

  // showDonorComponent: boolean = false; 
  //  onShowDonor() {
  //   this.showDonorComponent = true; // Set to true to show the component
  // }

  // onToggleDonor() {
  //   this.showDonorComponent = !this.showDonorComponent;
  // }
  // navigateToAnotherPage() {
  //   this.router.navigate(['/donor']);
  // }

  // showAcceptorComponent: boolean = false;
  // onShowAcceptor() {
  //   this.showAcceptorComponent = true; // Set to true to show the component
  // }

}
