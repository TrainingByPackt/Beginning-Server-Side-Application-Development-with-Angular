import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable()
export class UiService {

  private appColor = '#C3002F';
  private appImage = '/assets/logo.svg';
  private appTitle = 'Angular Social';
  private appDescription = 'Angular Social is a Social Networking App built in Angular';

  constructor(private titleService: Title, private metaService: Meta){}

  public setMetaData(config) {
    // Get the description of the config, or use the default App Description
    const description = config.description || this.appDescription;

    // Get the title of the config and append the App Title, or just use the App Title
    const title = config.title ? `${config.title} - ${this.appTitle}` : this.appTitle;

    // Set the Application Title
    this.titleService.setTitle(title);

    // Add the Application Meta tags
    this.metaService.addTags([
      { name: 'description', content: description },
      { name: 'theme-color', content: this.appColor },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:image', content: this.appImage },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      { name: 'apple-mobile-web-app-title', content: title },
      { name: 'apple-touch-startup-image', content: this.appImage },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: this.appImage },
    ]);
  }
}
