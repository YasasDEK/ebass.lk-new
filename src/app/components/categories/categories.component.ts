import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ajax } from 'rxjs/ajax';
// import { ItemService } from '../../services/item.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  job: any;
  isReceived: boolean = false;
  value;
  // data: Observable<Item[]>;
  type: Observable<Item[]>;
  datas: Item[];

  constructor(public _Activatedroute: ActivatedRoute, public ebass: AngularFirestore) {
    this.value = this._Activatedroute.snapshot.paramMap.get('job');
    console.log("value : " + this.value);

  }

  ngOnInit() {
    this.getData().subscribe(data => {
      this.datas = data;
      this.isReceived = true;
    });
  }
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('users'));
    return (user !== null ) ? true : false;
  }

  getData() {
    this.type = this.ebass.collection('workers', ref => ref
      .where('jobType', 'array-contains', this.value)
      .where('status', '==', 'available')
    ).valueChanges();
    // && (this.ebass.collection('workers', ref => ref.where('status', '==', true)).valueChanges());
    return this.type;
  }
  
   checklog(test) {
    const userone = JSON.parse(localStorage.getItem('users'));
    if ( userone === null ) {
      window.alert("You should login first");
      this.router.navigate(['signin']);
    }else {
      this.router.navigate(['viewprofile', test]);
    }
  }
  

}

interface Item {
  id?: string;
  mail?: string;
  mobile?: string;
  land?: string;
  username?: string;
  firstname?: string;
}
