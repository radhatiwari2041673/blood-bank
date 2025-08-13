import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators,} from '@angular/forms';

@Component({
  selector: 'app-acceptor',
  imports: [ReactiveFormsModule],
  templateUrl: './acceptor.component.html',
  styleUrls: ['./acceptor.component.css'],
  standalone: true,
})
export class AcceptorComponent {
  acceptor: FormGroup;

  constructor(private fb: FormBuilder) {
    this.acceptor = this.fb.group({
      name: ['', Validators.required],
      fatherOrSpouse: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern(/^\+\d{1,3}\d{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.acceptor.valid) {
      console.log('Form Submitted!', this.acceptor.value);
    }
  }
}
