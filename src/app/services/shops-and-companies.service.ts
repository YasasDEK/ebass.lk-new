import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class ShopsAndCompaniesService {

  constructor(private afs: AngularFirestore) { }

  getShops() {
    return this.afs.collection('/shops').snapshotChanges();
  }
  getCompanies() {
    return this.afs.collection('/companies').snapshotChanges();
  }

}
