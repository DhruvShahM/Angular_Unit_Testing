import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from 'src/app/models/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http:HttpClient) { }


  getPosts(){
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  deletePosts(post:Post){
    return this.http.delete(`https://jsonplaceholder.typicode.com/posts/${post.id}`);
  }
}
