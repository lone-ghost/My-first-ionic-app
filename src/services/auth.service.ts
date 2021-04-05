import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { first } from 'rxjs/operators';
import 'firebase/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  public userId: string;
  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private router: Router
  ) { }

  getUser(): Promise<firebase.default.User> {
    return this.afAuth.authState.pipe(first()).toPromise();
  }

  login(email: string, password: string): Promise<firebase.default.auth.UserCredential> {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  async signup(email: string, password: string): Promise<firebase.default.auth.UserCredential> {
    try {
      const newUserCredential: firebase.default.auth.UserCredential = await this.afAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      await this.firestore
        .doc(`userProfile/${newUserCredential.user.uid}`)
        .set({ email });
      return newUserCredential;
    } catch (error) {
      throw error;
    }
  }

  resetPassword(email: string): Promise<void> {
    return this.afAuth.sendPasswordResetEmail(email);
  }

  logout(): Promise<void> {
    return this.afAuth.signOut();
  }
}