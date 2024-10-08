import { Component } from '@angular/core';
import {DashboardComponent} from "../dashboard/dashboard.component"
import { RouterModule } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [DashboardComponent,RouterModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor(private location: Location) { }

  goback(){
    this.location.back();
  }
}
