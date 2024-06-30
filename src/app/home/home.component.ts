import { Component } from '@angular/core';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { _MatInternalFormField } from '@angular/material/core';
import { MatFormField } from '@angular/material/form-field';
import { MatFormFieldControl } from '@angular/material/form-field';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatSlideToggle, MatSlideToggle, MatFormField, MatInputModule,
    MatFormFieldModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
