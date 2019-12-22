import { VerifyEmailComponent } from './../../options/verify-email/verify-email.component';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ajax } from 'rxjs/ajax';
import * as _ from 'lodash';
// import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.scss']
})
export class AllusersComponent implements OnInit {
  results: any;
  filteredNames: any[] = [];
  username: string;
  status: string;
  verifyemail: string;
  filters = {}
  constructor(private afs: AngularFirestore) {

  }

  ngOnInit() {
    this.afs.collection('users'/*, ref => ref.limit(4)*/).valueChanges().subscribe(results => {
      this.results = results;
      this.applyFilters()
    });
  }

  private applyFilters() {
    this.filteredNames = _.filter(this.results, _.conforms(this.filters))
  }

  filterName(property: string, rule: string) {
    this.filters[property] = val => val.toLowerCase().includes(rule.toLowerCase())
    this.applyFilters()
  }

  filterEmail(property: string, rule: string) {
      this.filters[property] = val => val.toLowerCase().includes(rule.toLowerCase())
      this.applyFilters()
  }

  filterMobile(property: string, rule: string) {
      this.filters[property] = val => val.toLowerCase().includes(rule.toLowerCase())
      this.applyFilters()
  }

  filterVerifyEmail(property: string, rule: boolean) {
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
}