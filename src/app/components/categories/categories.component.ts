import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument  } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import 'firebase/firestore';
import { Router } from '@angular/router';
import { ajax } from 'rxjs/ajax';
import { Injectable, NgZone } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  job: any;
  isReceived: boolean = false;
  value;
  type: Observable<Item[]>;
  datas: Item[];

  constructor(public _Activatedroute: ActivatedRoute,
    public ebass: AngularFirestore,
    public router: Router) {
    this.value = this._Activatedroute.snapshot.paramMap.get('job');
    console.log("value : " + this.value);

  }

  ngOnInit() {
    this.getData().subscribe(data => {
      this.datas = data;
      this.isReceived = true;
    });
    

  }

  getData() {
    this.type = this.ebass.collection('workers', ref => ref.where('jobType', "array-contains", this.value).
      where('status', '==', "available")).valueChanges();
    return this.type;
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('users'));
    return (user !== null && user.emailVerified !== false) ? true : false;

    if (user === true) {
      // this.router.navigate(['verify']);
    }
  }


  checklog(test) {
    console.log("test " + test)
    const userone = JSON.parse(localStorage.getItem('users'));
    console.log("one " + userone )
    if ( userone === null ) {
      window.alert("You should login first");
      this.router.navigate(['signin']);
    }else {
      console.log('logged in');
      this.router.navigate(['viewprofile', test]);
    }
  }
}

interface Item {
  id?: string;
  mail?: string;
  mobile?: string;
  land?: string;
  username?: string;
  firstname?: string;
}
