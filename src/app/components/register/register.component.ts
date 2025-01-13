import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterLink,
    MatIconModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
visible: boolean = false;
  password: string = '';
  repeatPassword: string = '';
  email: string = '';
  errorMessage: string[] = [];

  constructor(private router: Router) {}
  
  toggle(){}

  onSubmit() {
    this.router.navigate(['/teampace/login']);
  }
}
