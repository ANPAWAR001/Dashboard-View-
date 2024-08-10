import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { RouterModule,ActivatedRoute } from '@angular/router';
import {SidebarComponent} from "../sidebar/sidebar.component" 
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-dashboard',
  standalone:true,
  imports:[RouterModule,SidebarComponent,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
// export class DashboardComponent implements OnInit {
//   showSidebar: boolean = false;
//   sidebarDisabled: boolean = false;

//   constructor(private router: Router,private route: ActivatedRoute) { }

//   ngOnInit(): void {
//     this.router.events.pipe(
//       filter(event => event instanceof NavigationEnd)
//     ).subscribe((event: NavigationEnd) => {
//       this.showSidebar = event.urlAfterRedirects === '/home' || event.urlAfterRedirects === '/about';
//     });

    
//   }
//   goToNextPage() {
    
//     this.router.navigate(['/next-page']);
//     this.route.queryParams.subscribe(params => {
//       if (params['disabled'] === 'true') {
//         this.sidebarDisabled = true;
//       }
//     });
//   }
// }
export class DashboardComponent implements OnInit {
  showSidebar: boolean = false;
  sidebarDisabled: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.showSidebar = event.urlAfterRedirects === '/home' || event.urlAfterRedirects === '/about';
    });
  }

  navigateTo(page: string) {
    this.router.navigate([`/${page}`]);
  }
  goToNextPage() {
    this.sidebarDisabled = true;
    window.open('/next-page', '_blank');
  }

  navigateToNextPage() {
    const newTabUrl = `${window.location.origin}/next-page?disableSidebar=true`;
    window.open(newTabUrl, '_blank');
  }
}