import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
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
  

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  navigateToAbout() {
    this.router.navigate(['/about']);
  }
}
