import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore';
import { Observable } from 'rxjs';
import { Ad } from 'src/models/ad';

@Injectable({
  providedIn: 'root'
})

export class FirestoreService {
  constructor(private firestore: AngularFirestore) { }

  genAd(adTitle: string, adDetails: string): Promise<void> {
    const id = this.firestore.createId();
    return this.firestore.doc(`adList/${id}`).set({
      id,
      adTitle,
      adDetails,
    });
  }

  genUAd(adTitle: string, adDetails: string): Promise<void> {
    const id = this.firestore.createId();
    return this.firestore.doc(`u_adList/${id}`).set({
      id,
      adTitle,
      adDetails,
    });
  }

  getAdList(): Observable<Ad[]> {
    return this.firestore.collection<Ad>(`adList`).valueChanges();
  }

  getUAdList(): Observable<Ad[]> {
    return this.firestore.collection<Ad>(`u_adList`).valueChanges();
  }

  getAdDetail(adId: string): Observable<Ad> {
    return this.firestore.collection('adList').doc<Ad>(adId).valueChanges();
  }

  getUAdDetail(adId: string): Observable<Ad> {
    return this.firestore.collection('u_adList').doc<Ad>(adId).valueChanges();
  }

  deleteAd(adId: string): Promise<void> {
    return this.firestore.doc(`adList/${adId}`).delete();
  }
}