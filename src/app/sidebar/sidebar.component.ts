import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  disabled: boolean = false;

  constructor(private router: Router) {
    // Listen for navigation events to check the current route
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.checkCurrentRoute();
    });
  }

  ngOnInit() {
    this.checkCurrentRoute();
  }

  private checkCurrentRoute() {
    const currentPath = this.router.url;
    this.disabled = !currentPath.includes('/home');
  }

  navigate(path: string) {
    if (!this.disabled) {
      this.router.navigate([`/${path}`]);
    }
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  navigateToAbout() {
    this.router.navigate(['/about']);
  }
}
