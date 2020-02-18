import { Url } from 'url';
import { VerifyEmailComponent } from './../../options/verify-email/verify-email.component';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ajax } from 'rxjs/ajax';
import * as _ from 'lodash';

@Component({
  selector: 'app-adminbookingview',
  templateUrl: './adminbookingview.component.html',
  styleUrls: ['./adminbookingview.component.scss']
})
export class AdminbookingviewComponent implements OnInit {

  results: any;
  filteredNames: any[] = [];
  username: string;
  status: string;
  verifyemail: string;
  data: Observable<Item[]>;
  datas: Item[];
  filters = {}
  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.getData().subscribe(data => {
      this.datas = data;
    })
  }

  getData() {
    this.data = this.afs.collection('bookings', ref => ref
    )
    .valueChanges();
    return this.data;
  }

  cancel(id) {
    this.afs.doc('bookings/' + id).update({'status': 'cancelled'});
     alert('Booking canceled');

  }
}

interface Item {
  useremail?: string,
  username?: string,
  mobilenumber?: number,
  bookingdesc?: string,
  bookingdate?: Date,
  usercity?: string,
  latitude?: number;
  longitude?: number;
  status?: string;
  workerid?: string;
  bookingid?: string;
  userid?: string;
  rate?: number;
  workermobile?: number;
  workername?: string;
  workeremail?: string;
}
  // private applyFilters() {
  //   this.filteredNames = _.filter(this.results, _.conforms(this.filters))
  // }

  // filterName(property: string, rule: string) {
  //   this.filters[property] = val => val.toLowerCase().includes(rule.toLowerCase())
  //   this.applyFilters()
  // }

  // filterJob(property: string, rule: string) {
  //   this.filters[property] = val => val.toLowerCase().includes(rule.toLowerCase())
  //   this.applyFilters()
  // }

  // filterStatus(property: string, rule: string) {
  //   this.filters[property] = val => val.toLowerCase().includes(rule.toLowerCase())
  //   this.applyFilters()
  // }

  // filterVerifyEmail(property: string, rule: string) {
  //   this.filters[property] = val => val.toLowerCase().includes(rule.toLowerCase())
  //   this.applyFilters()
  // }

  // removeFilter(property: string) {
  //   delete this.filters[property]
  //   this[property] == null
  //   this.applyFilters()
  // }

  // send() {
  //   this.results = this.results.sort((n1, n2) => {
  //     if (n1.uid > n2.uid) { return 1 }
  //     if (n1.uid < n2.uid) { return -1 }
  //     return 0;
  //   })
  //   this.applyFilters()
  //   // this.filteredNames.price.sort((n1,n2) =>{
  //   //   return (this.results)? n1.localeComapare(n2)
  //   //   :n2.localeComapare(n1);
  //   // });
  // }

  // send2() {
  //   this.results = this.results.sort((n1, n2) => {
  //     if (n1.uid < n2.uid) { return 1 }
  //     if (n1.uid > n2.uid) { return -1 }
  //     return 0;

  //   })
  //   this.applyFilters()
  // }

  // Completed(id) {
  //   this.afs.doc('bookings/' + id).update({'status': 'completed'});
  //    alert('Booking accepted');

  // }

  // cancel(id) {
  //   this.afs.doc('bookings/' + id).update({'status': 'canceled'});
  //   alert('Booking canceled');

  // }

