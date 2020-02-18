import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../options/services/auth.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {
  value: string;

  constructor(public _Activatedroute: ActivatedRoute,  public authService: AuthService) { }

  ngOnInit() {

    this.value = JSON.parse(localStorage.getItem('users')).email;
    console.log(this.value);
    return this.value;
  }

}
