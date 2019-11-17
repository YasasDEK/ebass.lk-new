import {Injectable, NgZone} from '@angular/core';
import { User } from './user';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthuService {
  userData: any;

  constructor(
      public afs: AngularFirestore,
      public afAuth: AngularFireAuth,
      public router: Router,
      public ngZone: NgZone
  ) {
      this.afAuth.authState.subscribe(user => {
          if (user) {
              this.userData = user;
              localStorage.setItem('users', JSON.stringify(this.userData));
              JSON.parse(localStorage.getItem('users'));
          } else {
              localStorage.setItem('users', null);
              JSON.parse(localStorage.getItem('users'));
          }
      })
  }

  SignIn(email, password) {
    console.log(this.userData)
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then((result) => {
          this.ngZone.run(() => {
            this.router.navigate(['home']);
          });
    //      this.SetUserData(this.userData);
        }).catch((error) => {
          window.alert(error.message)
        })
  }

  SignUp(email, password, username, id, mobile) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .then((result) => {
      this.SendVerificationMail();
          const userData: User = {
            uid: result.user.uid,
            username: username,
            idNumber: id,
            email: email,
            emailVerified: result.user.emailVerified,
            mobile: mobile,
          }
            console.log(mobile);
      this.SetUserData(userData);
    }).catch((error) => {
      window.alert(error.message)
            console.log(error)
        })
  }
  SendVerificationMail() {
    return this.afAuth.auth.currentUser.sendEmailVerification()
        .then(() => {
          this.router.navigate(['verify-email-address']);
        })
  }
  ForgotPassword(passwordResetEmail) {
    return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)
        .then(() => {
          window.alert('Password reset email sent, check your inbox.');
        }).catch((error) => {
          window.alert(error)
        })
  }
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('users'));
    return (user !== null && user.emailVerified !== false) ? true : false;
  }
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }
  AuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
        .then((result) => {
          this.ngZone.run(() => {
            this.router.navigate(['home']);
          })
          this.SetUserData(result.user);
        }).catch((error) => {
          window.alert(error)
        })
  }
  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    return userRef.set(user, {
      merge: true
    })
  }
  SignOut() {
    return this.afAuth.auth.signOut().then(() => {
      localStorage.removeItem('users');
      this.router.navigate(['sign-inu']);
    })
  }
}
