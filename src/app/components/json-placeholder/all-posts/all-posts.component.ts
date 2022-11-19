import { Component, Input, OnInit } from '@angular/core';
import { IPost } from 'src/app/models/IPost';
import { JsonPlaceholderComponent } from '../json-placeholder.component';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.scss']
})
export class AllPostsComponent implements OnInit {

  constructor(public jsonPlaceholderComponet: JsonPlaceholderComponent) { }

  ngOnInit(): void {
  }

}
