import { Component } from '@angular/core';
import { UserProfile } from 'src/models/user';
import { AlertController, MenuController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
  
export class AppComponent {
  public userProfile: UserProfile;
  
  constructor(private platform: Platform, private splashScreen: SplashScreen, private statusBar: StatusBar, private authService: AuthService, private alertCtrl: AlertController, private router: Router, private menuCtrl: MenuController) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  hideMenu() {
    this.menuCtrl.close();
  }

  async signOut() {
    const confirmLogout = await this.alertCtrl.create({
      message: 'Êtes-vous sûr de vouloir vous déconnecter?',
      buttons: [
        {
          text: 'Oui', role: 'confirm', handler: () => {
            this.authService.logout().then(
              () => {
                this.router.navigateByUrl('/login');
              }
            );
          }
        },
        { text: 'Non', role: 'cancel' }]
    });
    
    await confirmLogout.present();
  }
}
