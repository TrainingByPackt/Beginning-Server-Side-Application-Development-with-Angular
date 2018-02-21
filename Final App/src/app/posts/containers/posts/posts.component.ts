import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { UiService } from '../../../ui/services/ui.service';

@Component({
  selector: 'app-posts',
  template: `
    <app-post-list [posts]="posts"></app-post-list>
  `,
  styles: []
})
export class PostsComponent implements OnInit {
  public posts: any;
  constructor(private route: ActivatedRoute, private uiService: UiService) { }

  ngOnInit() {
    this.route.data
      .map(data => this.setMetaData(data['posts']))
      .map(data => data['items'])
      .subscribe((result: any) => this.posts = result)
  }

  setMetaData(posts) {
    const { itemsPerPage, itemsTotal } = posts['counters']
    const description = `Showing ${itemsPerPage} from ${itemsTotal} posts`
    const title = 'Posts List'
    this.uiService.setMetaData({ description, title })
    return posts;
  }
}
