import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-admin-sign-in',
  templateUrl: './admin-sign-in.component.html'
})
export class AdminSignInComponent implements OnInit {

  constructor(
      public authService: AuthService
  ) { }

  ngOnInit() {
  }

}
