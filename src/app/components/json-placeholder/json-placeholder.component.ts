import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { JsonPlaceholderService } from '../../services/json-placeholder.service';
import { IPost } from '../../models/IPost';

@Component({
  selector: 'app-json-placeholder',
  templateUrl: './json-placeholder.component.html',
  styleUrls: ['./json-placeholder.component.scss']
})
export class JsonPlaceholderComponent implements OnInit {

  post: IPost = {
    userId: 0,
    id: 0,
    title: '',
    body: ''
  };

  @Input() postId!: number;

  posts: IPost[] = [];

  constructor(public placeholderService: JsonPlaceholderService) { }

  ngOnInit() {
  }

  showPosts() {
    this.placeholderService.getPosts()
    .subscribe((data: IPost[]) => this.posts = data);
    console.log(this.posts);
  }

  showPost() {
    this.placeholderService.getPost(this.postId)
    .subscribe((data: IPost) => this.post = data);
  }
}
