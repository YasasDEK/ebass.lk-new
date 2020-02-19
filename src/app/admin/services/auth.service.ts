import { Injectable, NgZone } from '@angular/core';
import { Admin } from './admin';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Shop } from './shop';
import { Company } from './company';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  adminData: any;
  value;
  data: Observable<Item[]>;
  datas: Item[];
  num: string;
  shop;
  company;
  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone,
    public _Activatedroute: ActivatedRoute
  ) {

  }

  //fetch data asynchronously(not existing same time)
  SignInadmin(email, password) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password).then((result) => {
      if (result.user.emailVerified === true) {
        if (result.user.displayName === 'admin') {
          this.afAuth.authState.subscribe(admin => {
            if (admin) {
              this.adminData = admin;
              localStorage.setItem('admins', JSON.stringify(this.adminData));
              JSON.parse(localStorage.getItem('admins'));
              this.router.navigate(['/adminprofile/', email]);
            }
            else {
              localStorage.setItem('admins', null);
              JSON.parse(localStorage.getItem('admins'));
            }
          })
          // this.router.navigate(['/profile/', email]);
        }
      } else {
        window.alert('check your email and verify');
        this.router.navigateByUrl('adminsignin');
      }
    }).catch((error) => {
      window.alert(error);
      this.router.navigateByUrl('adminsignin');
    })
  }

  SignUpadmin(email, password, adminname, id, mobile) {

    if (id.length === 10) {
        if (adminname != '') {
          return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then((result) => {
              this.SendVerificationMail();
              const adminData: Admin = {
                uid: result.user.uid,
                adminname: adminname,
                idNumber: id,
                email: email,
                emailVerified: result.user.emailVerified,
                jobType: "Admin",
                mobile: mobile,
              }
              this.SendVerificationMail();
              result.user.updateProfile({ displayName: 'admin' });
              console.log(mobile);
              this.SetadminData(adminData);
              window.alert("Registration done");
            }).catch((error) => {
              window.alert(error.message)
              console.log(error)
            })
        }
      else {
        window.alert("You can keep empty lines ")
      }
    }
    else {
      window.alert("Invalid ID number ")
    }
  }

  Addshops(email, shopname, mobile, url) {
    this.shop = this.afs.createId();
    const shopData: Shop = {
      shopid: this.shop,
      shopname: shopname,
      email: email,
      jobType: "shop",
      mobile: mobile,
      url: url
    }
    console.log(mobile);
    this.SetshopData(shopData);
    window.alert("Registration done");

    ((error) => {
      window.alert(error.message)
      console.log(error)
    })
  }

  Addcompanies(email, companyname, mobile, url) {
    this.company = this.afs.createId();
    {
      const companyData: Company = {
        companyid: this.company,
        companyname: companyname,
        email: email,
        jobType: "company",
        mobile: mobile,
        url: url
      }
      console.log(mobile);
      this.SetcompanyData(companyData);
      window.alert("Registration done");
    }

    ((error) => {
      window.alert(error.message)
      console.log(error)
    })

  }

  SendVerificationMail() {
    return this.afAuth.auth.currentUser.sendEmailVerification()
      .then(() => {
        this.router.navigate(['adminverify']);
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

  SetshopData(shop) {
    this.afs.collection('shops').doc(this.shop).set(shop);
    this.router.navigate(['shops']);
    // const adminRef: AngularFirestoreDocument<any> = this.afs.doc(`shops/${shop.uid}`);
    // return adminRef.set(shop, {
    //   merge: true
    // })
  }

  SetcompanyData(company) {
    this.afs.collection('companies').doc(this.company).set(company);
    this.router.navigate(['companies']);
    // const companyRef: AngularFirestoreDocument<any> = this.afs.doc(`companies/${company.uid}`);
    // return companyRef.set(company, {
    //   merge: true
    // })
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
      // localStorage.clear();
      this.router.navigate(['adminsignin']);
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

