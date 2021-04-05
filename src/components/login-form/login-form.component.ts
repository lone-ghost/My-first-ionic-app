import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UserCredential } from 'src/models/user';

@Component({
  selector: 'app-login-form',
  templateUrl: 'login-form.component.html',
  styleUrls: ['login-form.component.scss']
})
  
export class LoginFormComponent implements OnInit {
  @Output() formSubmitted = new EventEmitter<any>();
  
  public loading: HTMLIonLoadingElement;
  public loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.minLength(6)]
    });
  }

  ngOnInit() {}

  navigateForgot() {
    this.router.navigateByUrl('/reset-password');
  }

  navigateSignup(){
    this.router.navigateByUrl('/signup')
  }
  
  submitCredentials(loginForm: FormGroup): void {
    if (!loginForm.valid) {
      console.log('Form is not valid yet, current value:', loginForm.value);
    } else {
      this.showLoading();
      const credentials: UserCredential = {
        email: loginForm.value.email,
        password: loginForm.value.password
      };
      this.formSubmitted.emit(credentials);
    }
  }

  async showLoading(): Promise<void> {
    try {
      this.loading = await this.loadingCtrl.create({
        message: 'Connexion...'
      });
      await this.loading.present();
    } catch (error) {
      this.handleError(error);
    }
  }

  hideLoading(): Promise<boolean> {
    return this.loading.dismiss();
  }

  async handleError(error): Promise<void> {
    const alert = await this.alertCtrl.create({
      message: error.message,
      buttons: [{ text: 'Ok', role: 'cancel' }]
    });
    await alert.present();
  }
}
