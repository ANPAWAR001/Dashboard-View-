import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-next-page',
  templateUrl: './next-page.component.html',
  styleUrls: ['./next-page.component.css']
})
export class NextPageComponent {
  disabled:boolean = false;
  constructor(private router: Router,private route:ActivatedRoute) { }

  ngOnInit(){
    this.route.queryParams.subscribe((params)=>{
      this.disabled=params['disabled'] === 'true';
    })
    if(!this.disabled){
      this.router.navigate(['/home']);
    }
    this.disabled=true;
  }
 
  
  goBack() {
    // this.router.navigate(['/home']);
    window.close();
  }
}
