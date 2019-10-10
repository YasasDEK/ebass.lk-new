import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
    id;

    constructor(private _Activatedroute: ActivatedRoute) {
         this.id = this._Activatedroute.snapshot.paramMap.get('id');
         console.log(this.id);
     }

    ngOnInit() {}

}
