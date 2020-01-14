import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../options/services/auth.service';
import { GooglemapComponent } from '../googlemap/googlemap.component';
import { Book } from './book'




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
  @ViewChild(GooglemapComponent) map;
  public latitude: number;
  public longitude: number;

  constructor(public _Activatedroute: ActivatedRoute,
    public ebass: AngularFirestore,
    public afs: AngularFirestore,
    public router: Router, ) {

    this.value = this._Activatedroute.snapshot.paramMap.get('uid');
    console.log('value : ' + this.value);
  }

  ngOnInit() {
    this.getData().subscribe(data => {
      this.datas = data;
    })
  }

  // ngAfterViewInit() {
  //   this.latitude = this.map.latitude;
  //   this.longitude = this.map.longitude;
  // }

  // recieveMessage($event) {
  //   this.latitude = $event;
  // }

  getData() {
    this.data = this.ebass.collection('workers', ref => ref.where('uid', '==', this.value)).valueChanges();
    return this.data;
  }

  setBooking(useremail, username, mobilenumber, bookingdesc, bookingdate, usercity) {

    const bookingData: Book = {
      // uid: result.user.uid,
      useremail: useremail,
      username: username,
      mobilenumber: mobilenumber,
      bookingdesc: bookingdesc,
      bookingdate: bookingdate,
      usercity: usercity,
      latitude: this.map.latitude,
      longitude: this.map.longitude
    }

    this.SetBookingData(bookingData);
    this.router.navigate(['']);
    ((error) => {
      window.alert(error.message)
      console.log(error)
    })
  }

  SetBookingData(Book) {
    this.afs.collection('bookings').add(Book);
    window.alert("Booking Done");
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
