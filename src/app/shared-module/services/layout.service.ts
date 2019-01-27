import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  sidebarSource$ = new Subject<boolean>();

  showSidebar(): void {
    this.sidebarSource$.next(true);
    console.log(this.sidebarSource$)
  }

  hideSidebar(): void {
    this.sidebarSource$.next(false);
    console.log(this.sidebarSource$)
  }

}
