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
    this.mason = this.ebass.collection('signup', ref => ref.where('jobs', '==', 'mason' )).valueChanges();
    this.painter = this.ebass.collection('signup', ref => ref.where('jobs', '==', 'painter')).valueChanges();
    this.carpenter = this.ebass.collection('signup', ref => ref.where('jobs', '==', 'carpenter')).valueChanges();
    this.electrician = this.ebass.collection('signup', ref => ref.where('jobs', '==', 'electrician')).valueChanges();
    this.plumber = this.ebass.collection('signup', ref => ref.where('jobs', '==', 'plumber')).valueChanges();
    this.repair = this.ebass.collection('signup', ref => ref.where('jobs', '==', 'repair')).valueChanges();
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
  id?: string;
  mail?: string;
  mobile?: string;
  username?: string;
  firstname?: string;
}
