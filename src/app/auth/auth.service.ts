import {
  Injectable
} from '@angular/core';
import { LayoutService } from '../shared-module/services/layout.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private LayoutService : LayoutService) {}

  // fake credentials
  private credentials = {
    login: 'admin',
    password: 'admin'
  }

  //fake login
  login(login, password) {
    return new Promise((resolve, reject) => {
      if (login === this.credentials.login && password === this.credentials.password) {
        this.isUserLoggedIn = true;
        resolve();
      } else {
        reject();
      }
    })
  }

  logout() {
    this.isUserLoggedIn = false;
    this.LayoutService.hideSidebar();
  }

  isLoggedIn() {
    return this.isUserLoggedIn
  }

  private isUserLoggedIn = false;

}
