import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UpdateAdminComponent } from '../updateadmin/updateadmin.component';
import * as firebase from 'firebase/app';


@Component({
    selector: 'app-admin-profile',
    templateUrl: './admin-profile.component.html',
    styleUrls: ['./admin-profile.component.scss']
})

export class AdminProfileComponent implements OnInit {
    totalUserCount: number;
    totalBookCount: number;
    totalCompanyCount: number;
    totalWorkerCount: number;
    totalShopCount: number;
    // tslint:disable-next-line: no-inferrable-types
    total: number = 0;
    getUserList: any;
    value: string;
    // data: Observable<Item[]>;
    // wor: Observable<Wor[]>;
    // boo: Observable<Boo[]>;
    // datas: Item[];
    isReceived = false;
    [x: string]: any;
    admin = JSON.parse(localStorage.getItem('admins'));


    constructor(public _Activatedroute: ActivatedRoute,
        public ebass: AngularFirestore,
        public authService: AuthService,
        public router: Router) {
        // this.value = this._Activatedroute.snapshot.paramMap.get('uid');
        // console.log('value : ' + this.value);
    }

    ngOnInit() {
        this.value = this._Activatedroute.snapshot.paramMap.get('email');
        console.log('value : ' + this.value);
        if (this.admin) {
            if (this.admin.email === this.value) {
                this.getData().subscribe(data => {
                    this.datas = data;
                    console.log('value : ' + this.admin.email);
                })
            } else {
                // someone logged & parameter email is not his
                window.alert('please login with ' + this._Activatedroute.snapshot.paramMap.get('email'));
                console.log('please log with ' + this.value);
            }
        } else {
            // no admin logged in
            this.router.navigate(['adminsignin']);
            window.alert('First u have to log to access this page');
            console.log('please loging before access this page');
        }

        this.work = this.ebass.collection('workers', ref => ref).valueChanges();
        this.work.subscribe(dataArray => {
        this.totalWorkerCount = dataArray.length;
        });

        this.book = this.ebass.collection('bookings', ref => ref).valueChanges();
        this.book.subscribe(dataArray => {
        this.totalBookCount = dataArray.length;
        });

        this.use = this.ebass.collection('users', ref => ref).valueChanges();
        this.use.subscribe(dataArray => {
        this.totalUserCount = dataArray.length;
        });

        this.com = this.ebass.collection('companies', ref => ref).valueChanges();
        this.com.subscribe(dataArray => {
        this.totalCompanyCount = dataArray.length;
        });

        this.sho = this.ebass.collection('shops', ref => ref).valueChanges();
        this.sho.subscribe(dataArray => {
        this.totalShopCount = dataArray.length;
        });
    }

    getData() {
        this.data = this.ebass.collection('admins', ref => ref.where('email', '==', this.value)).valueChanges();
        console.log('data' + this.data);
        return this.data;

    }
}


// interface Item {
//     uid?: string;
//     adminname?: string;
//     idNumber?: string;
//     email?: string;
//     emailVerified?: boolean;
//     jobType?: string;
//     mobile?: string;
// }

// interface Wor {
//     uid: string;
//     workername: string;
//     idNumber: string;
//     email: string;
//     jobType: Array<string>;
//     mobile: string;
//     status: string;
//     displayName?: string;
//     rate: number;
// }

// interface Boo {
//     useremail: string,
//     username: string,
//     mobilenumber: number,
//     bookingdesc: string,
//     bookingdate: Date,
//     usercity: string,
//     latitude: number;
//     longitude: number;
//     status: string;
//     workerid: string;
//     bookingid: string;
//     userid: string;
//     rate: number;
//     workermobile: number;
//     workername: string;
//     workeremail: string;
// }

// interface Wor {
//     uid: string;
//     workername: string;
//     idNumber: string;
//     email: string;
//     jobType: Array<string>;
//     mobile: string;
//     status: string;
//     displayName?: string;
//     rate: number;
// tslint:disable-next-line: eofline
// }