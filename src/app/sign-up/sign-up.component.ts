import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../services/auth-service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  @ViewChild("myForm") signUpForm: NgForm;
  isModalVisible = false;

  constructor(
    private authService: AuthService,
    private router: Router,
  ){}
 

  signUp(){
    let formVal = this.signUpForm.form.value;
    if(this.signUpForm.valid){
      this.authService.checkIfUserExist(formVal).subscribe({
        next: (res: any) => {
          if(res){
            this.authService.signUp(formVal).subscribe({
              next: (data: any) => {
                this.isModalVisible = true;
              },
              error: (err) => {
                window.alert(err);
              }
            })
          }
        },
        error: (err: any) => {
          window.alert(err);
        }
      })
    }
    else{
      this.signUpForm.form.markAllAsTouched();
      alert("Please fill up form as its shown");
    }
  }

  closeModal() {
    this.isModalVisible = false;
  }

}