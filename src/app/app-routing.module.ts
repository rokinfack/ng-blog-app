import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'blog', component:BlogComponent},
  {path:'add',component:AddBlogComponent},
  {path:'contact',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
