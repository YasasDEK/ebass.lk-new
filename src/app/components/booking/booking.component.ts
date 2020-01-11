import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-booking',
  styleUrls: ['./booking.component.scss'],
  templateUrl: './booking.component.html',
})
export class BookingComponent implements OnInit {
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
  