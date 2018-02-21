import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './containers/posts/posts.component';
import { ProfileComponent } from './containers/profile/profile.component';
import { PostsService } from './services/posts.service';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostItemComponent } from './components/post-item/post-item.component';
import { ProfileItemComponent } from './components/profile-item/profile-item.component';
import { PostsResolver } from './resolvers/posts-resolver'
import { ProfileResolver } from './resolvers/profile-resolver'

@NgModule({
  imports: [
    CommonModule,
    PostsRoutingModule
  ],
  declarations: [PostsComponent, ProfileComponent, PostListComponent, PostItemComponent, ProfileItemComponent],
  providers: [PostsService, PostsResolver, ProfileResolver]
})
export class PostsModule { }
