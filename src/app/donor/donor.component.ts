import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators,} from '@angular/forms';
//import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-donor',
  templateUrl: './donor.component.html',
  styleUrls: ['./donor.component.css'],
  //imports: [BrowserModule, ReactiveFormsModule],
  imports: [ReactiveFormsModule], // Assuming you want to use AppComponent
  standalone: true,
  //hostDirectives: [{ directive: AppComponent }] // Assuming you want to use AppComponent
})
export class DonorComponent {
  donor: FormGroup;

  constructor(private fb: FormBuilder) {
    this.donor = this.fb.group({
      name: ['', Validators.required],
      fatherOrSpouse: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern(/^\+\d{1,3}\d{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.donor.valid) {
      console.log('Form Submitted!', this.donor.value);
    }
  }
}