import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
    value;
    data: Observable<Item[]>;
    datas: Item[];
    isReceived: boolean = false;
    
    constructor(public _Activatedroute: ActivatedRoute, public ebass: AngularFirestore) {
          this.value = this._Activatedroute.snapshot.paramMap.get('uid');
          console.log("value : " + this.value);
     }

    ngOnInit() {this.getData().subscribe(data => {
        this.datas = data;
        this.isReceived = true;
      });
    }

    getData(){
        this.data = this.ebass.collection('workers', ref => ref.where('uid', '==', this.value )).valueChanges();
        return this.data;
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
  }
