import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-item',
  template: `
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <div class="card">
          <div class="card-body">
            <div class="media">
              <img class="avatar mr-3 rounded" [attr.src]="post?.profile?.avatar">
              <div class="media-body">
                <h5>
                  <a [routerLink]="post?.profile?.id"> {{post?.profile?.fullName}} </a>
                  <span class="date float-right text-muted">
                    {{ post.date }}
                  </span>
                </h5>
                <p>{{post?.text}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    img.avatar {
      height: 60px;
      width: 60px;
    }
    span.date {
      font-size: small;
    }
  `]
})
export class PostItemComponent implements OnInit {
  @Input() post: any;
  constructor() { }

  ngOnInit() {}

}
