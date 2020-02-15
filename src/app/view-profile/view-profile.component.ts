import { BookingComponent } from './../components/booking/booking.component';
import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../options/services/auth.service';
import { GooglemapComponent } from '../googlemap/googlemap.component';
import { Book } from './book';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})

export class ViewProfileComponent implements OnInit {

  @ViewChild(GooglemapComponent) map;
  public bookingId: string;
  value: string;
  data: Observable<Item[]>;
  datas: Item[];
  isReceived = false;
  public latitude: number;
  public longitude: number;

  constructor(public _Activatedroute: ActivatedRoute,
    public afs: AngularFirestore,
    public router: Router,
    public log: AuthService ) {

    this.value = this._Activatedroute.snapshot.paramMap.get('uid');
    console.log('value : ' + this.value);

  }

  ngOnInit() {
    this.getData().subscribe(data => {
        this.datas = data;
    })
  }

  getData() {
    this.data = this.afs.collection('workers', ref => ref.where('uid', '==', this.value)).valueChanges();
    return this.data;
  }

  setBooking(useremail, username, mobilenumber, bookingdesc, bookingdate, usercity) {
    this.bookingId = this.afs.createId();
    const bookingData: Book = {
   //   uid: this.userId,
      workerid: this.value,
      bookingid: this.bookingId,
      useremail: useremail,
      username: username,
      mobilenumber: mobilenumber,
      bookingdesc: bookingdesc,
      bookingdate: bookingdate,
      usercity: usercity,
      status: 'pending'
   //   latitude: this.map.latitude,
   //   longitude: this.map.longitude
    }

    this.SetBookingData(bookingData);
    ((error) => {
      window.alert(error.message)
      console.log(error)
    })
    
  }

  SetBookingData(Book) {
      //  this.afs.collection('bookings').doc(this.bookingId);
       this.afs.collection('bookings').doc(this.bookingId).set(Book);
       alert('Your booking placed successfully');
       this.router.navigate(['/succesbooking']);

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
