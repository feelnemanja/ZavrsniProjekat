import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  @ViewChild("myForm") signUpForm: NgForm;

  onSubmit() {
    if (!this.signUpForm.valid) {
      this.signUpForm.form.markAllAsTouched();
      alert("Molim vas popunite formu ispravno");
    }
    console.log(this.signUpForm);
  }

}