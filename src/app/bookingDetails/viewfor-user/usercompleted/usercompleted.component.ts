import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ajax } from 'rxjs/ajax';
import * as _ from 'lodash';
import { Ratedata } from './ratedata';


@Component({
  selector: 'app-usercompleted',
  templateUrl: './usercompleted.component.html',
  styleUrls: ['./usercompleted.component.scss']
})
export class UsercompletedComponent implements OnInit {
  results: any;
  filteredNames: any[] = [];
  workername: string;
  jobtype: string;
  status: string;
  value: string;
  verifyemail: string;
  finalrating: number;
  rateid: Ratedata;
  filters = {}
  rateId: string;
  rateObservable: Observable<Ratedata>;
  constructor(private afs: AngularFirestore, public _Activatedroute: ActivatedRoute) {
    this.value = this._Activatedroute.snapshot.paramMap.get('uid');
    console.log('value x ' + this.value);
  }

  ngOnInit() {
    this.afs.collection('bookings', ref => ref
      .where('userid', '==', this.value)
      .where('status', '==' , 'completed'))
      .valueChanges().subscribe(results => {
        this.results = results;
        this.applyFilters()
      })
  }

  private applyFilters() {
    this.filteredNames = _.filter(this.results, _.conforms(this.filters))
  }

  filterName(property: string, rule: string) {
    this.filters[property] = val => val.toLowerCase().includes(rule.toLowerCase())
    this.applyFilters()
  }

  filterJob(property: string, rule: string) {
    this.filters[property] = val => val.toLowerCase().includes(rule.toLowerCase())
    this.applyFilters()
  }

  filterStatus(property: string, rule: string) {
    this.filters[property] = val => val.toLowerCase().includes(rule.toLowerCase())
    this.applyFilters()
  }

  filterVerifyEmail(property: string, rule: string) {
    this.filters[property] = val => val.toLowerCase().includes(rule.toLowerCase())
    this.applyFilters()
  }

  removeFilter(property: string) {
    delete this.filters[property]
    this[property] == null
    this.applyFilters()
  }

  send() {
    this.results = this.results.sort((n1, n2) => {
      if (n1.uid > n2.uid) { return 1 }
      if (n1.uid < n2.uid) { return -1 }
      return 0;
    })
    this.applyFilters()
    // this.filteredNames.price.sort((n1,n2) =>{
    //   return (this.results)? n1.localeComapare(n2)
    //   :n2.localeComapare(n1);
    // });
  }

  send2() {
    this.results = this.results.sort((n1, n2) => {
      if (n1.uid < n2.uid) { return 1 }
      if (n1.uid > n2.uid) { return -1 }
      return 0;

    })
    this.applyFilters()
  }

  rate(rateval, bookid, desc, wid) {
    console.log('rating ' + rateval + ' id ' + bookid + ' decs ' + desc + ' wid');
    this.afs.doc('bookings/' + bookid).update({'rate': rateval});
    this.afs.doc('bookings/' + bookid).update({'ratedesc': desc });
    this.afs.doc('bookings/' + bookid).update({'status': 'rated' });

    this.rateObservable = this.afs.collection('workers', ref => ref
      .where('uid', '==', wid))
      .valueChanges() as unknown as Observable<Ratedata>;

    // this.finalrating = this.results.email;
    // console.log('x ' + this.finalrating + ' y ' + this.results.email);
    // this.eventId = localStorage.getItem("curEventId");
    this.rateObservable.subscribe(curRate => {
    this.rateid = curRate as Ratedata;
    console.log(this.rateid.rate);
    })



  }
}

