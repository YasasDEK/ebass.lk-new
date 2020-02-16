import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { EdituserprofileComponent } from '../edituserprofile/edituserprofile.component';
import * as firebase from 'firebase/app';


@Component({
    selector: 'app-userprofile',
    templateUrl: './userprofile.component.html',
    styleUrls: ['./userprofile.component.scss']
})

export class UserprofileComponent implements OnInit {
    value: string;
    data: Observable<Item[]>;
    datas: Item[];
    isReceived = false;
    [x: string]: any;
    user = JSON.parse(localStorage.getItem('users'));
    totalpendingBookCount: number;
    totalnotratedBookCount: number;
    totalfinishedratedBookCount: number;
    totalOngoingBookCount: string;


    constructor(public _Activatedroute: ActivatedRoute,
        public ebass: AngularFirestore,
        public authService: AuthService,
        public router: Router) {
        // this.value = this._Activatedroute.snapshot.paramMap.get('uid');
        // console.log('value : ' + this.value);
    }

    ngOnInit() {
        this.value = this._Activatedroute.snapshot.paramMap.get('email');
        console.log('value2 : ' + this.value);
        if (this.user) {
            if (this.user.email === this.value) {
                this.getData().subscribe(data => {
                    this.datas = data;
                    console.log('value : ' + this.datas[0]);
                })
            } else {
                // someone logged & parameter email is not his
                window.alert('please login with ' + this._Activatedroute.snapshot.paramMap.get('email'));
                console.log('please log with ' + this.value);
            }
        } else {
            // no user logged in
            this.router.navigate(['signin']);
            window.alert('First u have to log to access this page');
            console.log('please loging before access this page');
        }

        // console.log('value1 : ' + this.value);
        // this.pendingwork = this.ebass.collection('bookings', ref => ref
        // .where('useremail', '==', this.value)
        // .where('status', '==', 'pending')).valueChanges();
        // this.pendingwork.subscribe(dataArray => {
        //     this.totalpendingBookCount = dataArray.length;
        // });


        this.pendingwork = this.ebass.collection('bookings', ref => ref
            .where('status', '==', 'pending')
            .where('useremail', '==', this.value)).valueChanges();
        this.pendingwork.subscribe(dataArray => {
            this.totalpendingBookCount = dataArray.length;
        });

        this.notrated = this.ebass.collection('bookings', ref => ref
            .where('status', '==', 'completed')
            .where('useremail', '==', this.value)).valueChanges();
        this.notrated.subscribe(dataArray => {
            this.totalnotratedBookCount = dataArray.length;
        });


        this.completed = this.ebass.collection('bookings', ref => ref
            .where('status', '==', 'rated')
            .where('useremail', '==', this.value)).valueChanges();
        this.completed.subscribe(dataArray => {
            this.totalcompletedBookCount = dataArray.length;
        });

        this.ongoing = this.ebass.collection('bookings', ref => ref
            .where('status', '==', 'ongoing')
            .where('useremail', '==', this.value)).valueChanges();
        this.ongoing.subscribe(dataArray => {
            this.totalOngoingBookCount = dataArray.length;
        });

    }

    getData() {
        this.data = this.ebass.collection('users', ref => ref.where('email', '==', this.value)).valueChanges();
        console.log("data" + this.data);
        return this.data;

    }

}


interface Item {
    uid?: string;
    username?: string;
    idNumber?: string;
    email?: string;
    emailVerified?: boolean;
    jobType?: string;
    mobile?: string;
}
