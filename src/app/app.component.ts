import { Component } from '@angular/core';
import { Router, Event as NavigationEvent, NavigationEnd } from '@angular/router';

import  { menu }  from './test/menu'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  adminLayout = false;
  displayMenu = menu

  constructor(private router: Router){
    router.events.subscribe(
      (event: NavigationEvent) => {
        if(event instanceof NavigationEnd){
          if(event.url.indexOf('/admin') === 0){
            this.adminLayout = true
          }else{
            this.adminLayout = false
          }
        }
      }
    )
  }
}
