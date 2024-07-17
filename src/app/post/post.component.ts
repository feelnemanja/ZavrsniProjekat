import { Component, Input } from '@angular/core';
import { Post } from '../modals/Post';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  @Input()  post: Post;
  
  }
