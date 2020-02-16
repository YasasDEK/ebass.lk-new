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
  selector: 'app-allcompanies',
  templateUrl: './allcompanies.component.html',
  styleUrls: ['./allcompanies.component.scss']
})
export class AllcompaniesComponent implements OnInit {
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
    this.data = this.afs.collection('companies', ref => ref.where('jobType', '==', 'company')).valueChanges();
    return this.data;
  }

  delete(){
    
  }

  image(id){
    console.log(id);
    this.router.navigate(['/companyimage', id]);
  }
}


interface Item {
  compnyname?: string;
  url?: Url;
  email?: string;
  mobile?: number;
}
