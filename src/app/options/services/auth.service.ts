import { Injectable, NgZone } from '@angular/core';
import { Worker } from './worker';
import { User } from './user';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  workerData: any;
  value;
  data: Observable<Item[]>;
  datas: Item[];
  num: string;

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone,
    public _Activatedroute: ActivatedRoute
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
    this.afAuth.auth.signInWithEmailAndPassword(email, password).then((result) => {
      if (result.user.displayName === 'worker') {
        this.router.navigate(['/profile/', email]);
      }
      if (result.user.displayName === 'user') {
        this.router.navigate(['/home/']);
      }
    }).catch((error) => {
      window.alert(error);
      this.router.navigateByUrl('signin');
    })
  }

  SignUpWorker(email, password, workername, job, id, mobile) {
    if (job == "mason" || job == "electrician" || job == "plumber" || job == "painter" || job == "repair" || job == "carpenter") {
      if (id.length == 10) {
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
              status: 'unavailable',
            }
            this.SendVerificationMail();
            result.user.updateProfile({ displayName: 'worker' });
            console.log(mobile);
            this.SetWorkerData(workerData);
            window.alert("Registration done");
          }).catch((error) => {
            window.alert(error.message)
            console.log(error)
          })
      }
      else {
        window.alert("Invalid ID number ")
      }
    }
    else {
      window.alert("Job Type doen't available ")
    }
  }

  SignUpUser(email, password, username, id, mobile) {
    console.log(id);
    if (id.length == 10) {
      return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .then((result) => {
          // this.SendVerificationMail();
          const userData: User = {
            uid: result.user.uid,
            username: username,
            idNumber: id,
            email: email,
            emailVerified: result.user.emailVerified,
            jobType: "user",
            mobile: mobile,
            status: 'available'
          }
          this.SendVerificationMail();
          result.user.updateProfile({ displayName: 'user' });
          console.log(mobile);
          this.SetUserData(userData);
          window.alert("Registration done");
        }).catch((error) => {
          window.alert(error.message)
          console.log(error)
        })
    }
    else {
      window.alert("Invalid ID number ")
    }
  }

  SendVerificationMail() {
    return this.afAuth.auth.currentUser.sendEmailVerification()
      .then(() => {
        this.router.navigate(['verify']);
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

  SetUserData(user) {
    const workerRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    return workerRef.set(user, {
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

interface Item {
  uid?: string;
  workername?: string;
  idNumber?: string;
  email?: string;
  emailVerified?: boolean;
  jobType?: string;
  mobile?: string;
  status?: string;
}

