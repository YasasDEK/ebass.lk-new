import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { rate } from './rate';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})

export class RatingComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  
  // currentRate = 10;
  // public bookingId: string;
  // value: string;
  // data: Observable<Item[]>;
  // datas: Item[];
  // isReceived = false;
  

  // constructor(public _Activatedroute: ActivatedRoute,
  //   public afs: AngularFirestore,
  //   public router: Router, ) {
  //   this.value = this._Activatedroute.snapshot.paramMap.get('uid');
  //   console.log('value : ' + this.value);
    
  // }

  // ngOnInit() {
  //   this.getData().subscribe(data => {
  //     this.datas = data;
  //   })
  // }

  // getData() {
  //   this.data = this.afs.collection('workers', ref => ref.where('uid', '==', this.value)).valueChanges();
  //   return this.data;
  // }


  // setRating(description,rateNum) {
  //   this.bookingId = this.afs.createId();
  //   const bookingData: rate = {
  //     workerid: this.value,
  //     bookingid: this.bookingId,
  //     userid:   1: ,
  //     RateValue: rateNum,
  //     description: description,
  //   }

  //   this.SetBookingData(bookingData);
  //   this.router.navigate(['/home']);
  //   ((error) => {
  //     window.alert(error.message)
  //     console.log(error)
  //   })

  // }

  // SetBookingData(Book) {
  //     //  this.afs.collection('bookings').doc(this.bookingId);
  //      this.afs.collection('bookings').doc(this.bookingId).set(Book);
  //      alert('Your booking placed successfully');
  //   }

}

interface Item {
  uid?: string;
  workername?: string;
  idNumber?: string;
  email?: string;
  emailVerified?: boolean;
  jobType?: string;
  mobile?: string;
}
