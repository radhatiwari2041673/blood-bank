import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-homepage',
  imports: [CommonModule, RouterLink],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent {
  constructor(private router: Router) {
  }
  goToAbout() {
    const donarId = 1; // Replace with the actual donor ID as needed
    this.router.navigate(['/donar', donarId]);
  }

  goToDonor() {
    console.log('Navigating to Donor Registration');
    this.router.navigate(['/donor']);
  }
  
  goToAcceptor() {
    console.log('Navigating to Acceptor Registration');
    this.router.navigate(['/acceptor']);
  }
}
// goToAbout method is now inside the class and properly implemented.

