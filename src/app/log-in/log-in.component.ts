import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {


  @ViewChild("myForm") signUpForm: NgForm;

  onSubmit() {
    if (!this.signUpForm.valid) {
      this.signUpForm.form.markAllAsTouched();
    }
    console.log(this.signUpForm);
  }

}
