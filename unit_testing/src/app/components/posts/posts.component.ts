import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/Posts/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostsService) { }

  ngOnInit(): void {
    this.getPosts();
  }
  getPosts() {
    this.postService.getPosts().subscribe({
      next: (post: Post[]) => this.posts = post,
      complete: () => ('done'),
      error: (err) => console.log(err)
    })
  }

  deletePosts(post: Post) {
    this.posts=this.posts.filter((ele)=>ele.id!==post.id);
    this.postService.deletePosts(post).subscribe({
      next: () => console.log('delete done'),
      complete: () => ('done'),
      error: (err) => console.log(err)
    })
  }

}
