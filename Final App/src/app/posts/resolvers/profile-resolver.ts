import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, Resolve } from '@angular/router'
import { PostsService } from '../services/posts.service'

@Injectable()
export class ProfileResolver implements Resolve<any> {

  constructor(private postsService: PostsService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.postsService.getProfile(route.params['profileId'])
  }
}
