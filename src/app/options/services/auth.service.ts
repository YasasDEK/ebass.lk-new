import { Injectable, NgZone } from '@angular/core';
import { Worker } from './worker';
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

  // Verify(email) {
  //   this.value = this.afs.collection('workers' || 'users', ref => ref.where('email', '==', email)).valueChanges();
  //   this.value.subscribe(data => {
  //     this.datas = data;
  //     this.num = this.datas[0].jobType;
  //     console.log(this.num)
  //   });

  //   if (this.datas[0].jobType == 'mason' || this.datas[0].jobType == 'painter' || this.datas[0].jobType == 'electrician' || this.datas[0].jobType == 'plumber' || this.datas[0].jobType == 'carpener' || this.datas[0].jobType == 'repair') {
  //     this.router.navigate(['home']);
  //   }
  //   else {
  //     window.alert("Invalid User")
  //   }

  // }

  SignIn(email, password) {


    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          // this.value = this.afs.collection('workers', ref => ref.where('email', '==', email)).valueChanges();
          // this.value.subscribe(data => {
          //   this.datas = data;
          //   this.num = this.datas[0].jobType;
          //   console.log(this.num)
          // });
          // if (this.datas[0].jobType == 'user') {
            this.router.navigate(['/profile', email]);
          // }
          // else if (this.datas[0].jobType == 'mason' || this.datas[0].jobType == 'painter' || this.datas[0].jobType == 'electrician' || this.datas[0].jobType == 'plumber' || this.datas[0].jobType == 'carpener' || this.datas[0].jobType == 'repair') {
          //   this.router.navigate(['home']);
          // }
          // else {
          //   window.alert("error");
          // }

        });
      }).catch((error) => {
        window.alert(error.message);
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
              status: true,
              checked: "No"
            }
            this.SendVerificationMail();
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

  SignUpUser(email, password, workername, job, id, mobile) {
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
              status: true,
              checked: "No"
            }
            this.SendVerificationMail();
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
  status?: boolean;
  checked?: string;
}

