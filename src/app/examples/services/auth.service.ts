import { Injectable, NgZone } from '@angular/core';
import { Worker } from './worker';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  workerData: any;

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  ) {
    this.afAuth.authState.subscribe(worker => {
      if (worker) {
        this.workerData = worker;
        localStorage.setItem('workers', JSON.stringify(this.workerData));
        JSON.parse(localStorage.getItem('workers'));
      } else {
        localStorage.setItem('workers', null);
        JSON.parse(localStorage.getItem('workers'));
      }
    })
  }

  SignIn(email, password) {
    console.log(this.workerData)
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

  SignUp(email, password, workername, job, id, mobile) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.SendVerificationMail();
        const workerData: Worker = {
          uid: result.user.uid,
          workername: workername,
          idNumber: id,
          email: email,
          emailVerified: result.user.emailVerified,
          jobType: job,
          mobile: mobile,
        }
        console.log(mobile);
        this.SetWorkerData(workerData);
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
    const worker = JSON.parse(localStorage.getItem('workers'));
    return (worker !== null && worker.emailVerified !== false) ? true : false;
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
        this.SetWorkerData(result.user);
      }).catch((error) => {
        window.alert(error)
      })
  }
  SetWorkerData(worker) {
    const workerRef: AngularFirestoreDocument<any> = this.afs.doc(`workers/${worker.uid}`);
    return workerRef.set(worker, {
      merge: true
    })
  }
  SignOut() {
    return this.afAuth.auth.signOut().then(() => {
      localStorage.removeItem('worker');
      this.router.navigate(['sign-in']);
    })
  }
}
