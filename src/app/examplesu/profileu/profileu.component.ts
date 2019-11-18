import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-profileu',
    templateUrl: './profileu.component.html',
    styleUrls: ['./profileu.component.scss']
})

export class ProfileuComponent implements OnInit {
    value;
    data: Observable<Item[]>;
    datas: Item[];
    isReceived: boolean = false;

    constructor(public _Activatedroute: ActivatedRoute, public ebass: AngularFirestore) {
        this.value = this._Activatedroute.snapshot.paramMap.get('id');
        console.log("value : " + this.value);
    }

    ngOnInit() {
        this.getData().subscribe(data => {
            this.datas = data;
            this.isReceived = true;
        });
    }

    getData() {
        this.data = this.ebass.collection('signup', ref => ref.where('id', '==', this.value)).valueChanges();
        return this.data;
    }
}

interface Item {
    id?: string;
    mail?: string;
    mobile?: string;
    land?: string;
    username?: string;
    firstname?: string;
}
