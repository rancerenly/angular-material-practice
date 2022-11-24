import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { JsonPlaceholderService } from '../../services/postsServices/posts.service';
import { IPost } from '../../models/IPost';

@Component({
  selector: 'app-json-placeholder',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  public isViewPosts: boolean = true;

  post: IPost = {
    userId: 0,
    id: 0,
    title: '',
    body: ''
  };

  postId: number = 1;
  posts: IPost[] = [];

  constructor(public placeholderService: JsonPlaceholderService) { 

  }

  ngOnInit() {

  }

  showPosts(): void {
    this.isViewPosts = false;
    this.placeholderService.getPosts()
    .subscribe((data: IPost[]) => this.posts = data);
  }

  showPost(): void {
    this.isViewPosts = true;
    this.placeholderService.getPost(this.postId)
    .subscribe((data: IPost) => this.post = data);
  }
}
