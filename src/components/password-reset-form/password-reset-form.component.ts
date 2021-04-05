import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { UserResetCredential } from 'src/models/user';

@Component({
  selector: 'app-password-reset-form',
  templateUrl: 'password-reset-form.component.html',
  styleUrls: ['password-reset-form.component.scss'],
})
  
export class PasswordResetFormComponent implements OnInit {
  public loading: HTMLIonLoadingElement;
  public passwordResetForm: FormGroup;
  
  @Output() formSubmitted = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder, private loadingCtrl: LoadingController, private alertCtrl: AlertController) {
    this.passwordResetForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])]
    });
  }

  ngOnInit() { }
  
  submitCredentials(passwordResetForm: FormGroup): void {
    if (!passwordResetForm.valid) {
      console.log('Form is not valid yet, current value:', passwordResetForm.value);
    } else {
      this.showLoading();
      const credentials: UserResetCredential = {
        email: passwordResetForm.value.email,
      };
      this.formSubmitted.emit(credentials);
    }
  }

  async showLoading(): Promise<void> {
    try {
      this.loading = await this.loadingCtrl.create();
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
