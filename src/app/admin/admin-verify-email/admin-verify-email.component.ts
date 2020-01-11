import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-admin-verify-email',
  templateUrl: './admin-verify-email.component.html'
})
export class AdminVerifyEmailComponent implements OnInit {

  constructor(
      public authService: AuthService
  ) { }

  ngOnInit() {
  }

}
