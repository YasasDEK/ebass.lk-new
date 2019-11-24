import { Component, OnInit } from '@angular/core';
import { AuthuService } from '../servicesu/authu.service';

@Component({
  selector: 'app-forgot-passwordu',
  templateUrl: './forgot-passwordu.component.html'
})
export class ForgotPassworduComponent implements OnInit {

  constructor(
      public authuService: AuthuService
  ) { }

  ngOnInit() {
  }

}
