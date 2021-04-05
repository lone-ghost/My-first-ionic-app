import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoginFormComponent } from 'src/components/login-form/login-form.component';
import { UserCredential } from 'src/models/user';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
  
export class LoginPage implements OnInit {
  @ViewChild(LoginFormComponent) loginForm: LoginFormComponent;

  constructor(private authService: AuthService, public router: Router) { }

  ngOnInit() {
  }

  async loginUser(credentials: UserCredential): Promise<void> {
    try {
      const userCredential: firebase.default.auth.UserCredential = await this.authService.login(
        credentials.email,
        credentials.password
      );
      this.authService.userId = userCredential.user.uid;
      await this.loginForm.hideLoading();
      this.router.navigateByUrl('home');
    } catch (error) {
      await this.loginForm.hideLoading();
      this.loginForm.handleError(error);
    }
  }
}
