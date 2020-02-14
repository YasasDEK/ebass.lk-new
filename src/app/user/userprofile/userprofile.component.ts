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


    constructor(public _Activatedroute: ActivatedRoute,
                public ebass: AngularFirestore,
                public authService: AuthService,
                public router: Router) {
        this.value = this._Activatedroute.snapshot.paramMap.get('uid');
        console.log('value : ' + this.value);
    }

    ngOnInit() {
            this.value = this._Activatedroute.snapshot.paramMap.get('email');
            console.log('value : ' + this.value);
            if (this.user) {
                if ( this.user.email === this.value) {
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
