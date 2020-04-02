import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/services/auth.service'; // Please always use relative paths

@Component({
  selector: 'navigation-bar', // You should always have your app prefix in the selector
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

    // The service is injected as private, but is used in the template. 
    // This will fail the build. If it used in the template, it should be public
  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

}
