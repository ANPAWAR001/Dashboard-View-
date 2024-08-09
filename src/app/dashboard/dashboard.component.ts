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

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Check the initial route to determine whether to show the sidebar
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.showSidebar = event.urlAfterRedirects === '/home' || event.urlAfterRedirects === '/about';

      // Check query parameters on navigation
      this.route.queryParams.subscribe(params => {
        if (params['disabled'] === 'true') {
          this.sidebarDisabled = true;
        } else {
          this.sidebarDisabled = false;
        }
      });
    });
  }

  goToNextPage() {
    const nextPageUrl = this.router.serializeUrl(
      this.router.createUrlTree(['/next-page'], { queryParams: { disabled: 'true' } })
    );

    window.open(nextPageUrl, '_blank');
  }
}