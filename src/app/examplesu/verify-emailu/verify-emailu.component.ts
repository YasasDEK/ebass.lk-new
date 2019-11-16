import { Component, OnInit } from '@angular/core';
import { AuthuService } from '../servicesu/authu.service';

@Component({
  selector: 'app-verify-emailu',
  templateUrl: './verify-emailu.component.html',
  styleUrls: ['./verify-emailu.component.scss']
})
export class VerifyEmailuComponent implements OnInit {

  constructor(
      public authService: AuthuService
  ) { }

  ngOnInit() {
  }

}
