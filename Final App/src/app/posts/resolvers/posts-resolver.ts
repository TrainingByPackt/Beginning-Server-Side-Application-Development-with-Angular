import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'
import { PostsService } from '../services/posts.service'

@Injectable()
export class PostsResolver implements Resolve<any> {

  constructor(private postsService: PostsService) {}

  resolve() {
    return this.postsService.getPosts()
  }
}
