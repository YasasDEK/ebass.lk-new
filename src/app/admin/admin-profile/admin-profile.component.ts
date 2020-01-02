import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UpdateAdminComponent } from '../updateadmin/updateadmin.component';

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

    constructor(public _Activatedroute: ActivatedRoute, public ebass: AngularFirestore, public authService: AuthService) {
        this.value = this._Activatedroute.snapshot.paramMap.get('email');
        console.log('value : ' + this.value);
    }

    ngOnInit() {
        this.getData().subscribe(data => {
            this.datas = data;
            console.log('value : ' + this.data);
        })
    }

    getData() {
        this.data = this.ebass.collection('admins', ref => ref.where('email', '==', this.value)).valueChanges();
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
