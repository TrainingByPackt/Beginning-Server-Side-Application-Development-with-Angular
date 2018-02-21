import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './containers/posts/posts.component'
import { ProfileComponent } from './containers/profile/profile.component'
import { PostsResolver } from './resolvers/posts-resolver'
import { ProfileResolver } from './resolvers/profile-resolver'

const routes: Routes = [
  { path: '', component: PostsComponent, resolve: { posts: PostsResolver } },
  { path: ':profileId', component: ProfileComponent, resolve: { profile: ProfileResolver }  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
