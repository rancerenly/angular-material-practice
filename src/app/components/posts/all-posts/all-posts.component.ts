import { Component, Input, OnInit } from '@angular/core';
import { IPost } from 'src/app/models/IPost';
import { PostsComponent } from '../posts.component';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.scss']
})
export class AllPostsComponent implements OnInit {

  constructor() { }

  @Input() posts: IPost[] = [];

  ngOnInit(): void {

  }

}
