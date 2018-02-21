import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './ui/components/layout/layout.component'

const routes: Routes = [
  { path: '', component: LayoutComponent, children: [
    { path: '', redirectTo: '/posts', pathMatch: 'full'},
    { path: 'posts', loadChildren: './posts/posts.module#PostsModule' },
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
