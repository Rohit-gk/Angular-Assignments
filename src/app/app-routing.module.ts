import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
    // { path: '', redirectTo: '/addcutomer', pathMatch: 'full' },
    { path:'content', component:ContentComponent },
    { path:'sidebar', component:SidebarComponent },
    { path:'gallery', component:GalleryComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
