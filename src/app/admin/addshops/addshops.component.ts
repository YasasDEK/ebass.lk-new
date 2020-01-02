import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-addshops',
  templateUrl: './addshops.component.html',
  styleUrls: ['./addshops.component.scss']
})
export class AddshopsComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
