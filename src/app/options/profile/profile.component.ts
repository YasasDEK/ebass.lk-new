import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { UpdateworkerComponent} from '../updateworker/updateworker.component';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';


@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
    [x: string]: any;
    value: string;
    data: Observable<Item[]>;
    datas: Item[];
    isReceived = false;
    worker = JSON.parse(localStorage.getItem('workers'));

    constructor(public _Activatedroute: ActivatedRoute,
                public ebass: AngularFirestore,
                public authService: AuthService,
                public router: Router) {
    }

    ngOnInit() {
        console.log('value 1: ' + this.worker.email);
        this.value = this._Activatedroute.snapshot.paramMap.get('email');
        console.log('value 2: ' + this.value);
        if (this.worker) {
            if ( this.worker.email === this.value) {
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
            // no worker logged in
            this.router.navigate(['signin']);
            window.alert('First you have to log to access this page');
            console.log('please loging before access this page');
        }
    }

    getData() {
        this.data = this.ebass.collection('workers', ref => ref.where('email', '==', this.value)).valueChanges();
        return this.data;
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
