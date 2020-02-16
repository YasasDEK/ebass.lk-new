import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {
  value: string;

  constructor(public _Activatedroute: ActivatedRoute) { }

  ngOnInit() {

    this.value = JSON.parse(localStorage.getItem('users')).email;
    console.log(this.value);
    return this.value;
  }

}
