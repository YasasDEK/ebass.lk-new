import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../options/services/auth.service';
import { GooglemapComponent } from '../googlemap/googlemap.component';
import { Book} from './book'




@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {
  
  value: string;
  data: Observable<Item[]>;
  datas: Item[];
  isReceived = false;
  @Input('parentData') public latitude;
  
  constructor(public _Activatedroute: ActivatedRoute, 
              public ebass: AngularFirestore,
              public afs: AngularFirestore,
              public router: Router,) {
    
    this.value = this._Activatedroute.snapshot.paramMap.get('uid');
    console.log('value : ' + this.value);
}

ngOnInit() {
  this.getData().subscribe(data => {
      this.datas = data;
      
  })
}

getData() {
  this.data = this.ebass.collection('workers', ref => ref.where('uid', '==', this.value)).valueChanges();
  return this.data;
}

setBooking(useremail,username,mobilenumber,bookingdesc,bookingdate,usercity){

  const bookingData: Book = {
    // uid: result.user.uid,
    useremail: useremail,
    username: username,
    mobilenumber: mobilenumber,
    bookingdesc: bookingdesc,
    bookingdate: bookingdate,
    usercity: usercity,

  }
  // console.log(mobile);
  console.log("nnjd" + this.latitude);

  this.SetBookingData(bookingData);

  
  ((error) => {
    window.alert(error.message)
    console.log(error)
  })
}

SetBookingData(Book) {
  this.afs.collection('bookings').add(Book);
  window.alert("Booking Done");
  this.router.navigate(['view']);
  // const adminRef: AngularFirestoreDocument<any> = this.afs.doc(`shops/${shop.uid}`);
  // return adminRef.set(shop, {
  //   merge: true
  // })
}

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
