import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  template: `
    <div *ngFor="let post of posts" class="mb-3">
      <app-post-item [post]="post"></app-post-item>
    </div>
  `,
  styles: []
})
export class PostListComponent implements OnInit {

  @Input() posts: any[];

  constructor() { }

  ngOnInit() {
  }

}
