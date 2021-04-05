import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { NewUserCredential } from 'src/models/user';

@Component({
  selector: 'app-signup-form',
  templateUrl: 'signup-form.component.html',
  styleUrls: ['signup-form.component.scss'],
})
  
export class SignupFormComponent implements OnInit {
  public loading: HTMLIonLoadingElement;
  public signupForm: FormGroup;
 
  @Output() formSubmitted = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder, private loadingCtrl: LoadingController, private alertCtrl: AlertController) {
    this.signupForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.minLength(6)],
      password_confirm: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  ngOnInit() {}

  submitCredentials(signupForm: FormGroup): void {
    if (!signupForm.valid) {
      console.log('Form is not valid yet, current value:', signupForm.value);
    } else {
      this.showLoading();
      const credentials: NewUserCredential = {
        email: this.signupForm.value.email,
        password: this.signupForm.value.password,
        first_name: this.signupForm.value.first_name,
        last_name: this.signupForm.value.last_name
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
