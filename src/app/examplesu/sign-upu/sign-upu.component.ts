import { Component, OnInit } from '@angular/core';
import { AuthuService } from '../servicesu/authu.service';

@Component({
  selector: 'app-sign-upu',
  templateUrl: './sign-upu.component.html'
})
export class SignUpuComponent implements OnInit {

  constructor(
    public authuService: AuthuService
  ) { }

  ngOnInit() {
  }

}
