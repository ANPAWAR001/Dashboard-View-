// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';
// import { AboutComponent } from './about/about.component';
// import { NextPageComponent } from './next-page/next-page.component';
// import { SidebarComponent } from './sidebar/sidebar.component';

// export const routes: Routes = [
//   { path: 'home', component: HomeComponent },
//   { path: 'about', component: AboutComponent },
//   { path: 'next-page', component: NextPageComponent },
//   { path: '', redirectTo: '/home', pathMatch: 'full' }  // Redirect to home if no path is specified
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NextPageComponent } from './next-page/next-page.component';
import { SidebarComponent } from './sidebar/sidebar.component';

export const routes: Routes = [
  
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'next-page', component: NextPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
