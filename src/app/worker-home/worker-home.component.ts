import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AuthService } from '../options/services/auth.service';

@Component({
  selector: 'app-worker-home',
  templateUrl: './worker-home.component.html',
  styleUrls: ['./worker-home.component.scss']
})
export class WorkerHomeComponent implements OnInit {
  value: any;

  constructor(public _Activatedroute: ActivatedRoute, public authService: AuthService,) { }

  ngOnInit() {

    this.value = JSON.parse(localStorage.getItem('workers')).email;
    console.log(this.value);
    return this.value;

  }

}
