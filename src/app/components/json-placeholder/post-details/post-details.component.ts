import { Component, Input, OnInit } from '@angular/core';
import { IPost } from '../../../models/IPost';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  constructor() { }

  @Input()
  post!: IPost;

  ngOnInit(): void {
    
  }

}
