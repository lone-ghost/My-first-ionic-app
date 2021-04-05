import { Component, OnInit, ViewChild } from '@angular/core';
import { UserResetCredential } from 'src/models/user';
import { AuthService } from 'src/services/auth.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { PasswordResetFormComponent } from 'src/components/password-reset-form/password-reset-form.component';

@Component({
  selector: 'app-reset-password',
  templateUrl: 'reset-password.page.html',
  styleUrls: ['reset-password.page.scss']
})

export class ResetPasswordPage implements OnInit {
  @ViewChild(PasswordResetFormComponent) passwordResetForm: PasswordResetFormComponent;

  constructor(private authService: AuthService, private alertCtrl: AlertController, private router: Router) { }

  ngOnInit() { }

  async resetPassword(credentials: UserResetCredential): Promise<void> {
    try {
      await this.authService.resetPassword(credentials.email);
      await this.passwordResetForm.hideLoading();
      const alert = await this.alertCtrl.create({
        message: 'Un message a été envoyé à ' + credentials.email + 'Vérifiez votre boîte de réception afin réinitialiser votre mot de passe',
        buttons: [
          {
            text: 'Ok',
            role: 'cancel',
            handler: () => {
              this.router.navigateByUrl('login');
            }
          }
        ]
      });
      await alert.present();
    } catch (error) {
      await this.passwordResetForm.hideLoading();
      this.passwordResetForm.handleError(error);
    }
  }
}