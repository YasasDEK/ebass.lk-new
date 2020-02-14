import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ajax } from 'rxjs/ajax';
import * as _ from 'lodash';

@Component({
  selector: 'app-user-ongoingbooking',
  templateUrl: './user-ongoingbooking.component.html',
  styleUrls: ['./user-ongoingbooking.component.scss']
})
export class UserOngoingbookingComponent implements OnInit {
  results: any;
  filteredNames: any[] = [];
  workername: string;
  jobtype: string;
  status: string;
  value: string;
  verifyemail: string;
  filters = {}
  constructor(private afs: AngularFirestore, public _Activatedroute: ActivatedRoute) {
    this.value = this._Activatedroute.snapshot.paramMap.get('uid');
    console.log('value ' + this.value);
  }

  ngOnInit() {
    this.afs.collection('bookings', ref => ref
      .where('userId', '==', '1')
      .where('status', '==' , 'ongoing'))
      .valueChanges().subscribe(results => {
        this.results = results;
        this.applyFilters()
      })
  }

  private applyFilters() {
    this.filteredNames = _.filter(this.results, _.conforms(this.filters))
  }

}
