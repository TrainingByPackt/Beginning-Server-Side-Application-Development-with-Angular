import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <nav class="navbar fixed-bottom navbar-expand navbar-dark bg-dark">
      <div class="navbar-text m-auto">
        {{developer}} <i class="fa fa-copyright"></i> {{year}}
      </div>
    </nav>
  `,
  styles: []
})
export class FooterComponent implements OnInit {
  public developer = 'Bram Borggreve';
  public year = '2018';
  constructor() { }

  ngOnInit() {
  }

}
