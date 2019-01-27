import { Component, OnInit } from '@angular/core';
import { LayoutService } from './shared-module/services/layout.service';
import { Router, NavigationEnd, NavigationCancel, NavigationError, NavigationStart, Event } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent implements OnInit{
  isSidebarVisible : boolean = false;
  isLoading : boolean = false;

constructor(private LayoutService : LayoutService, private router : Router) {}

ngOnInit() {
  this.LayoutService.sidebarSource$.subscribe((isVisible) => {
    this.isSidebarVisible = isVisible;
  })

  this.router.events.subscribe((routerEvent : Event) => {
    this.checkRouterEvent(routerEvent)
  });
}

private checkRouterEvent(routerEvent: Event) {
  if (routerEvent instanceof NavigationStart) {
    this.isLoading = true;
  } else if (routerEvent instanceof NavigationEnd ||
    routerEvent instanceof NavigationCancel ||
    routerEvent instanceof NavigationError) {
    this.isLoading = false;
  }
}
}

