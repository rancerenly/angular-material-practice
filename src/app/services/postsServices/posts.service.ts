import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { IPost } from '../../models/IPost';

@Injectable({
  providedIn: 'root'
})
export class JsonPlaceholderService {

jsonPlaceholderPostsUrl = "https://jsonplaceholder.typicode.com/posts"

constructor(private http: HttpClient) { }

getPosts() {
  return this.http.get<IPost[]>(this.jsonPlaceholderPostsUrl);
}
getPost(id: number) {
  return this.http.get<IPost>(`${this.jsonPlaceholderPostsUrl}/${id}`);
}

}
