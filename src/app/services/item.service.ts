import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  itemsCollection: AngularFirestoreCollection<Item>;
  mason: Observable<Item[]>;
  painter: Observable<Item[]>;
  carpenter: Observable<Item[]>;
  electrician: Observable<Item[]>;
  plumber: Observable<Item[]>;
  repair: Observable<Item[]>;

  constructor(public ebass: AngularFirestore) {
    this.mason = this.ebass.collection('workers', ref => ref.where('jobType', '==', 'mason')).valueChanges();
    this.painter = this.ebass.collection('workers', ref => ref.where('jobType', '==', 'painter')).valueChanges();
    this.carpenter = this.ebass.collection('workers', ref => ref.where('jobType', '==', 'carpenter')).valueChanges();
    this.electrician = this.ebass.collection('workers', ref => ref.where('jobType', '==', 'electrician')).valueChanges();
    this.plumber = this.ebass.collection('workers', ref => ref.where('jobType', '==', 'plumber')).valueChanges();
    this.repair = this.ebass.collection('workers', ref => ref.where('jobType', '==', 'repair')).valueChanges();
  }
  getMason() {
    return this.mason;
  }
  getPaint() {
    return this.painter;
  }
  getCarpenter() {
    return this.carpenter;
  }
  getElectrician() {
    return this.electrician;
  }
  getPlumber() {
    return this.plumber;
  }
  getRepair() {
    return this.repair;
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
