import { Injectable, NgZone } from '@angular/core';
import { Admin } from './admin';
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
  adminData: any;
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
    this.afAuth.authState.subscribe(admin => {
      if (admin) {
        this.adminData = admin;
        localStorage.setItem('admins', JSON.stringify(this.adminData));
        JSON.parse(localStorage.getItem('admins'));
      } else {
        localStorage.setItem('admins', null);
        JSON.parse(localStorage.getItem('admins'));
      }
    })

  }

  // Verify(email) {
  //   this.value = this.afs.collection('admins' || 'users', ref => ref.where('email', '==', email)).valueChanges();
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
          // this.value = this.afs.collection('admins', ref => ref.where('email', '==', email)).valueChanges();
          // this.value.subscribe(data => {
          //   this.datas = data;
          //   this.num = this.datas[0].jobType;
          //   console.log(this.num)
          // });
          // if (this.datas[0].jobType == 'user') {
            this.router.navigate(['/adminprofile', email]);
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

  SignUpadmin(email, password, adminname, job, id, mobile) {
    if (job == "mason" || job == "electrician" || job == "plumber" || job == "painter" || job == "repair" || job == "carpenter") {
      if (id.length == 10) {
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
          .then((result) => {
            this.SendVerificationMail();
            const adminData: Admin = {
              uid: result.user.uid,
              adminname: adminname,
              idNumber: id,
              email: email,
              emailVerified: result.user.emailVerified,
              jobType: job,
              mobile: mobile,
            }
            this.SendVerificationMail();
            console.log(mobile);
            this.SetadminData(adminData);
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

  SignUpUser(email, password, adminname, job, id, mobile) {
    if (job == "mason" || job == "electrician" || job == "plumber" || job == "painter" || job == "repair" || job == "carpenter") {
      if (id.length == 10) {
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
          .then((result) => {
            this.SendVerificationMail();
            const adminData: Admin = {
              uid: result.user.uid,
              adminname: adminname,
              idNumber: id,
              email: email,
              emailVerified: result.user.emailVerified,
              jobType: job,
              mobile: mobile,
            }
            this.SendVerificationMail();
            console.log(mobile);
            this.SetadminData(adminData);
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
    const admin = JSON.parse(localStorage.getItem('admins'));
    return (admin !== null && admin.emailVerified !== false) ? true : false;
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
        this.SetadminData(result.user);
      }).catch((error) => {
        window.alert(error)
      })
  }

  SetadminData(admin) {
    const adminRef: AngularFirestoreDocument<any> = this.afs.doc(`admins/${admin.uid}`);
    return adminRef.set(admin, {
      merge: true
    })
  }

  SignOut() {
    return this.afAuth.auth.signOut().then(() => {
      localStorage.removeItem('admin');
      this.router.navigate(['sign-in']);
    })
  }
}

interface Item {
  uid?: string;
  adminname?: string;
  idNumber?: string;
  email?: string;
  emailVerified?: boolean;
  jobType?: string;
  mobile?: string;
}

