import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UiService } from '../../../ui/services/ui.service';

@Component({
  selector: 'app-profile',
  template: `
    <app-profile-item [profile]="profile"></app-profile-item>
  `,
  styles: []
})
export class ProfileComponent implements OnInit {
  public profile: any;
  constructor(private route:ActivatedRoute, private uiService: UiService) { }

  ngOnInit() {
    this.route.data
      .map(data => this.setMetaData(data['profile']))
      .subscribe((result: any) => this.profile = result)
  }

  setMetaData(profile) {
    const { fullName, posts } = profile;
    const description = `${fullName} posted ${posts.length} posts.`;
    const title = `Posts by ${fullName}`;
    this.uiService.setMetaData({ description, title });
    return profile;
  }
}
