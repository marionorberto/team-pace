import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    MatIconModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  visible: boolean = false;
  password: string = '';
  email: string = '';
  errorMessage: string[] = [];

  constructor(private router: Router) {}
  
  toggle(){}

  onSubmit() {
    this.router.navigate(['/teampace/dashboard/overview']);
  }

}
