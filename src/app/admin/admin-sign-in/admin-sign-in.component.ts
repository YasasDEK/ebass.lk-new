import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-sign-in',
  templateUrl: './admin-sign-in.component.html'
})
export class AdminSignInComponent implements OnInit {

  constructor(
      public authService: AuthService,
      public router: Router) {
  }

  ngOnInit() {
  }

}
