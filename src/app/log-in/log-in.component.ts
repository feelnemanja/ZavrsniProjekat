import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../services/auth-service';
import { Router, RouterModule } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    RouterModule, FormsModule
  ],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {

  @ViewChild("myForm") signUpForm: NgForm;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  onSubmit() {
    if (!this.signUpForm.valid) {
      this.signUpForm.form.markAllAsTouched();
    }
    console.log(this.signUpForm);
  }

  signIn(email: string, password: string) {
    this.authService.signIn(email, password).subscribe({
      next: (res: any) => {
        window.alert("succesfully log in");
        this.router.navigate(['/']);
      },
      error: (err) => {
        window.alert(err);
      }
    })
  }
}