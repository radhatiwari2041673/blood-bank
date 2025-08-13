import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-admin-login',
  imports: [],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {

username: string = '';
  password: string = '';
  loginError: string = '';

  constructor(private router: Router) {}

  login() {
    debugger;
    console.log
    if (this.username === 'admin' && this.password === 'admin123') {
      this.loginError = '';
      alert('Login successful!');
      this.router.navigate(['/dashboard']);
      // this.router.navigate(['/admin-login/dashboard']);
    } else {
      this.loginError = 'Invalid username or password.';
    }
  }
}
