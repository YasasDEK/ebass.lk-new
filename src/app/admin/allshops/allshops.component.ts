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
  selector: 'app-allshops',
  templateUrl: './allshops.component.html',
  styleUrls: ['./allshops.component.scss']
})
export class AllshopsComponent implements OnInit {
  results: any;
  filteredNames: any[] = [];
  username: string;
  status: string;
  verifyemail: string;
  data: Observable<Item[]>;
  datas: Item[];
  filters = {}
  constructor(private afs: AngularFirestore, public router: Router) { }

  ngOnInit() {
    this.getData().subscribe(data => {
      this.datas = data;
    })
  }

  getData() {
    this.data = this.afs.collection('shops', ref => ref.where('jobType', '==', 'shop')).valueChanges();
    return this.data;
  }

  delete(){
    console.log("hiiiiiii");
  }

  image(id){
    console.log(id);
    this.router.navigate(['/shopimage', id]);
  }
}

interface Item {
  compnyname?: string;
  url?: Url;
  email?: string;
  mobile?: number;
}
