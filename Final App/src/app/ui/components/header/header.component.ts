import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <a class="navbar-brand" routerLink="/">
        <img [src]="logo" width="30" height="30" alt="">
        {{title}}
      </a>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item" *ngFor="let item of items" routerLinkActive="active">
            <a class="nav-link" [routerLink]="item.url">{{item.label}}</a>
          </li>
        </ul>
      </div>
    </nav>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {
  public logo = 'assets/logo.svg';
  public title = 'Angular Social';
  public items = [{ label: 'Posts', url: '/posts'}];

  constructor() { }

  ngOnInit() {
  }

}
