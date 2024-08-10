import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone:true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router,private location: Location) { }

  // goToNextPage() {
  //   window.open(window.location.href,'_blank')
  //   this.router.navigate(['/next-page']);
  // }
  // goToNextPage() {
  //   // Construct the URL for the next page
  //   const nextPageUrl = this.router.serializeUrl(this.router.createUrlTree(['/next-page']));

  //   // Open the URL in a new tab
  //   window.open(nextPageUrl, '_blank');
  // }
  // goToNextPage() {
  //   // Construct the URL for the next page with query parameters
  //   const nextPageUrl = this.router.serializeUrl(
  //     this.router.createUrlTree(['/next-page'], { queryParams: { disabled: 'true' } })
  //   );

  // //   // Open the URL in a new tab
  //   window.open(nextPageUrl, '_blank');
  // }
  navigateToNextPage() {
    localStorage.setItem('disableSidebar', 'true');
    const newTabUrl = `${window.location.origin}/next-page`; //?disableSidebar=true
    window.open(newTabUrl, '_blank');
  }

  goback(){
    this.location.back();
  }
}
