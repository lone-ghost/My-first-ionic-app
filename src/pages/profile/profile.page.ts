import { Component, OnInit } from '@angular/core'
import { ProfileService } from 'src/services/profile.service';
import { AlertController } from '@ionic/angular';
import { UserProfile } from 'src/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss']
})

export class ProfilePage implements OnInit {
  public userProfile: UserProfile;

  constructor(private profileService: ProfileService, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.profileService.getUserProfile().then(profile$ => {
      profile$.subscribe(userProfile => {
        this.userProfile = userProfile;
      });
    });
  }

  async updateEmail(): Promise<void> {
    const alert = await this.alertCtrl.create({
      inputs: [
        { type: 'text', name: 'newEmail', placeholder: 'Nouvel adresse e-mail' },
        { type: 'password', name: 'password', placeholder: 'Mot de passe' }
      ],
      buttons: [
        { text: 'Annuler' },
        {
          text: 'Confirmer',
          handler: data => {
            this.profileService
              .updateEmail(data.newEmail, data.password)
              .then(() => {
                console.log('Email Changed Successfully');
              })
              .catch(error => {
                console.log('ERREUR: ' + error.message);
              });
          }
        }
      ]
    });
    return await alert.present();
  }

  async updatePassword(): Promise<void> {
    const alert = await this.alertCtrl.create({
      inputs: [
        { name: 'oldPassword', placeholder: 'Ancien mot de passe', type: 'password' },
        { name: 'newPassword', placeholder: 'Nouveau mot de passe', type: 'password' },
      ],
      buttons: [
        { text: 'Annuler' },
        {
          text: 'Confirmer',
          handler: data => {
            this.profileService.updatePassword(
              data.newPassword,
              data.oldPassword
            );
          }
        }
      ]
    });
    return await alert.present();
  }
}