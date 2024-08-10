import { Component, OnInit, Renderer2 } from '@angular/core';

import { Router,ActivatedRoute } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
@Component({
  selector: 'app-next-page',

  templateUrl: './next-page.component.html',
  styleUrls: ['./next-page.component.css']
})
export class NextPageComponent implements OnInit {
  constructor(private router: Router, private renderer: Renderer2,private route: ActivatedRoute) { }
  disableSidebar = false;
  ngOnInit() {
    // this.route.queryParams.subscribe(params => {
    //   const disableSidebar = params['disableSidebar'] === 'true';
    //   if (disableSidebar) {
    //     document.querySelector('.sidebar')?.classList.add('disabled');
    //   }
    // });

    // const disableSidebar = 'true';
    // if(disableSidebar){
    //   document.querySelector('.sidebar')?.classList.add('disabled');
    // }
     this.disableSidebar = localStorage.getItem('disableSidebar') === 'true';
    if(this.disableSidebar){
      document.querySelector('.sidebar')?.classList.add('disabled');
    }
    this.disableSidebar=false

  }

  goBack() {
    localStorage.setItem('disableSidebar', 'false');
    window.close();
  }
  
}

