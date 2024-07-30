import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { _MatInternalFormField } from '@angular/material/core';
import { PostComponent } from '../post/post.component';
import { CommonModule } from '@angular/common';
import { Post } from '../modals/Post';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, PostComponent, CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  [x: string]: any;

  constructor(
    public router: Router
  ) {

  }

  posts: Post[] = [
    { id: 1, title: "Fiesta Bouquet", imgSrc: "flower1.jpeg", price: 60 },
    { id: 2, title: "Alluring Elegance Bouquete", imgSrc: "flower2.jpeg", price: 72 },
    { id: 3, title: "Beyond Blue Bouquet", imgSrc: "flower3.jpeg", price: 55 },
    { id: 4, title: "Mixed Roses", imgSrc: "flower4.jpeg", price: 35 },
    { id: 5, title: "Belle of the Ball Bouquet", imgSrc: "flower5.jpeg", price: 45 },
    { id: 6, title: "Rainbow Garden", imgSrc: "flower6.jpeg", price: 50 },
    { id: 7, title: "Best Day Bouquet", imgSrc: "flower7.jpeg", price: 61 },
    { id: 8, title: "Smiles & Sunshine", imgSrc: "flower8.jpeg", price: 45 },
  ];


  @ViewChild("myForm") signUpForm: NgForm;

  onSubmit() {
    if (!this.signUpForm.valid) {
      this.signUpForm.form.markAllAsTouched();
      alert("Molim vas popunite formu ispravno");
    }
    console.log(this.signUpForm);
  }

}
