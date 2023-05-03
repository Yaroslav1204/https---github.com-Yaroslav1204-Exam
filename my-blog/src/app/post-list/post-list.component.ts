import { Component } from '@angular/core';

import { PostServiceService } from '../service/post-service.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  posts: Post[] = [];

  constructor(private postService: PostServiceService) {}

  ngOnInit() {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts
    })
  }
}
