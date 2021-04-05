import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserCredential } from 'src/models/user';
import { AuthService } from 'src/services/auth.service';
import { SignupFormComponent } from 'src/components/signup-form/signup-form.component';

@Component({
  selector: 'app-signup',
  templateUrl: 'signup.page.html',
  styleUrls: ['signup.page.scss']
})

export class SignupPage implements OnInit {
  @ViewChild(SignupFormComponent) signupForm: SignupFormComponent;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() { }

  async signupUser(credentials: UserCredential): Promise<void> {
    try {
      const userCredential: firebase.default.auth.UserCredential = await this.authService.signup(
        credentials.email,
        credentials.password
      );
      this.authService.userId = userCredential.user.uid;
      await this.signupForm.hideLoading();
      this.router.navigateByUrl('home');
    } catch (error) {
      await this.signupForm.hideLoading();
      this.signupForm.handleError(error);
    }
  }
}