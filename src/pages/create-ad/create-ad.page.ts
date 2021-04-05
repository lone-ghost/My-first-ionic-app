import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { FirestoreService } from "src/services/data/firestore.service";

@Component({
  selector: 'app-create-ad',
  templateUrl: 'create-ad.page.html',
  styleUrls: ['create-ad.page.scss'],
})
  
export class CreateAdPage implements OnInit {
  public adForm: FormGroup;

  constructor(formBuilder: FormBuilder, private alertCtrl: AlertController, private firestore: FirestoreService, private router: Router, private toastCtrl: ToastController) {
    this.adForm = formBuilder.group({
      titreAnnonce: ['', Validators.required],
      descriptionAnnonce: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Annonce créée avec succès',
      position: 'bottom',
      duration: 2000
    });
    toast.present().then(
      () => {
        this.router.navigateByUrl('/my-ads');
      }
    );
  }

  async createAd() {
    const adTitle = this.adForm.value.titreAnnonce;
    const adDetails = this.adForm.value.descriptionAnnonce;
    this.firestore.genAd(adTitle, adDetails);
    this.firestore.genUAd(adTitle, adDetails);
    this.presentToast();
  }
}