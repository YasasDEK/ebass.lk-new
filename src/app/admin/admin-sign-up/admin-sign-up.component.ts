import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-admin-sign-up',
  templateUrl: './admin-sign-up.component.html'
})
export class AdminSignUpComponent implements OnInit {

  constructor(
      public authService: AuthService
  ) { }

  ngOnInit() {
  }

}
