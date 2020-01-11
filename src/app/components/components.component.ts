import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styles: ['./components.component.css']
})

export class ComponentsComponent implements OnInit {
    isReceived: boolean = false;
    results: any;
    constructor(/*private afs: AngularFirestore*/) {

    }

    ngOnInit() {

    }

}
