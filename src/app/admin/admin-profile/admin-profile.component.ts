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
    value: string;
    data: Observable<Item[]>;
    datas: Item[];
    isReceived = false;
    [x: string]: any;
    admin = JSON.parse(localStorage.getItem('admins'));


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
            if (this.admin) {
                if ( this.admin.email === this.value) {
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
                // no admin logged in
                this.router.navigate(['adminsignin']);
                window.alert('First u have to log to access this page');
                console.log('please loging before access this page');
            }
    }

    getData() {
        this.data = this.ebass.collection('admins', ref => ref.where('uid', '==', this.value)).valueChanges();
        console.log("data" + this.data);
        return this.data;

    }

}


interface Item {
    uid?: string;
    adminname?: string;
    idNumber?: string;
    email?: string;
    emailVerified?: boolean;
    jobType?: string;
    mobile?: string;
}
