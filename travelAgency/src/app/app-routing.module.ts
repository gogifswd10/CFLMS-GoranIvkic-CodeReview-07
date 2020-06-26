import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TravelsComponent } from './travels/travels.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
{
                path:"", component: TravelsComponent
        },{
                path: 'blogcontents/:blogcontentsId', component: BlogComponent
        }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
