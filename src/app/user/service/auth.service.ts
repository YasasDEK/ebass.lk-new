import { User } from './../../options/services/user';
import { Injectable, NgZone } from '@angular/core';
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
  userData: any;
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


  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('users'));
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

  SignOutUser() {
    return this.afAuth.auth.signOut().then(() => {
      localStorage.removeItem('user');
      localStorage.clear();
      this.router.navigate(['signin']);
    })
  }
}

interface Item {
  uid?: string;
  username?: string;
  idNumber?: string;
  email?: string;
  emailVerified?: boolean;
  jobType?: string;
  mobile?: string;
}

