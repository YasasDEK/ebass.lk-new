import { Component, OnInit } from '@angular/core';
import { AuthuService } from '../servicesu/authu.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-sign-inu',
  templateUrl: './sign-inu.component.html'
})
export class SignInuComponent implements OnInit {

  City: any = ['User', 'Worker']

  constructor(
    public authuService: AuthuService
  ) { }

  ngOnInit() {
    return this.City;
  }

}
