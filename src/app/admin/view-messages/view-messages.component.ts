import { VerifyEmailComponent } from './../../options/verify-email/verify-email.component';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ajax } from 'rxjs/ajax';
import * as _ from 'lodash';

@Component({
  selector: 'app-view-messages',
  templateUrl: './view-messages.component.html',
  styleUrls: ['./view-messages.component.scss']
})
export class ViewMessagesComponent implements OnInit {
  type: Observable<Item[]>;
  results: any;
  value;
  filters = {}
  constructor(private afs: AngularFirestore) {

  }

  ngOnInit() {
    this.getData().subscribe(results => {
      this.results = results;
    })
  }

  getData() {
    this.type = this.afs.collection('message').valueChanges();
    return this.type;
  }

}

interface Item {
  username?: string;
  usermail?: string;
  mobile?: string;
  usermessage?: string;

}
