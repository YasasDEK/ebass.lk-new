import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
    value;
    
    constructor(public _Activatedroute: ActivatedRoute) {
          this.value = this._Activatedroute.snapshot.paramMap.get('id');
          console.log("value : " + this.value);
     }

    ngOnInit() {
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
  