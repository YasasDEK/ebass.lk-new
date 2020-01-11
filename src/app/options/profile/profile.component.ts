import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UpdateworkerComponent} from '../updateworker/updateworker.component';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
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
            console.log('value : ' + this.datas[0]);
        })
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
