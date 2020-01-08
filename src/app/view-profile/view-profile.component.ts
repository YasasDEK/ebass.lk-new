import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../options/services/auth.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {
  value: string;
  data: Observable<Item[]>;
  datas: Item[];
  isReceived = false;

  constructor(public _Activatedroute: ActivatedRoute, public ebass: AngularFirestore) {
    this.value = this._Activatedroute.snapshot.paramMap.get('uid');
    console.log('value : ' + this.value);
}

ngOnInit() {
  this.getData().subscribe(data => {
      this.datas = data;
  })
}

getData() {
  this.data = this.ebass.collection('workers', ref => ref.where('uid', '==', this.value)).valueChanges();
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
