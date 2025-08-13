import { Component } from '@angular/core';
import { Router , RouterLink,RouterOutlet } from '@angular/router';
import { AcceptorComponent } from '../acceptor/acceptor.component';
import { DonorComponent } from '../donor/donor.component';

@Component({
  selector: 'app-dashboard',
  //imports: [RouterOutlet, AcceptorComponent, DonorComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  showDonorComponent: boolean = false;
  showAcceptorComponent: boolean = false;
  router: Router;
  constructor(router: Router) {
    this.router = router;
  }
  navigateToPage() {
    this.router.navigate(['/donor']);
    this.router.navigate(['/acceptor']);
    this.router.navigate(['/homepage']);
    this.showDonorComponent = true;
  }
}
