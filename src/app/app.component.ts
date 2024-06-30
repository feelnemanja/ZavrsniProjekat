import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SocialSidebarComponent } from './social-sidebar/social-sidebar.component';
import {MatFormFieldModule, matFormFieldAnimations} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule} from '@angular/material/slide-toggle';




@Component({
  selector: 'app-root', 
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HomeComponent, NavBarComponent, SocialSidebarComponent, MatButtonModule,
    MatFormFieldModule, MatInputModule, FormsModule, MatSlideToggleModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  title = 'ZavrsniProjekat';
  
}


