import {
  Injectable
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

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

  isLoggedIn() {
    return this.isUserLoggedIn;
  }

  private isUserLoggedIn = false;

}
