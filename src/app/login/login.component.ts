import { Component,  } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { LayoutService } from '../shared-module/services/layout.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {
  login = '';
  password = '';
  constructor(private authService : AuthService,
              private router : Router,
              private LayoutService : LayoutService) { }

  onSubmit() {
    this.authService.login(this.login, this.password)
      .then(this.onSubmitSuccess.bind(this), this.onSubmitFailure);
  }

  private onSubmitSuccess() {
      this.router.navigate(['/cars']).then(() => this.LayoutService.showSidebar());
  }

  private onSubmitFailure() {
      console.log('Login or password is incorrect, please try again!');
  }

}
