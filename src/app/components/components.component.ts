import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit, Renderer } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styles: ['./components.component.css']
})

export class ComponentsComponent implements OnInit {
    searchterm: string;

    startAt = new Subject();
    endAt =  new Subject();

    jobs;
    alljobs

    startobs = this.startAt.asObservable;
    endobs = this.endAt.asObservable;

    constructor(private afs: AngularFirestore) {}

    ngOnInit() {
        Observable.combineLatest(this.startobs , this.endobs).subscribe((value) => {
            this.firequery(value[0], value[1]).subscribe((jobs) => {
                this.alljobs = jobs;
            })
        })
    }

    search(event) {
        let q = event.target.value;
        this.startAt.next(q);
        this.endAt.next(q + '\uf8ff');
    }

    firequery(start, end) {
        return this.afs.collection('signup', ref => ref.limit(4).orderBy('job').startAt(start).endAt(end)).valueChanges();
    }

}


