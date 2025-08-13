import { Routes } from '@angular/router';
import { AcceptorComponent } from './acceptor/acceptor.component';
import { DonorComponent } from './donor/donor.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent},
  { path: 'donor', component: DonorComponent },
  { path: 'acceptor', component: AcceptorComponent },
  { path: 'homepage/admin-login', component: AdminLoginComponent }, // Example route with parameter
  { path: 'dashboard', component: DashboardComponent }

];
// export const routes: Routes = [];
