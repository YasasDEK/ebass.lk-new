import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-addcompanies',
  templateUrl: './addcompanies.component.html',
  styleUrls: ['./addcompanies.component.scss']
})
export class AddcompaniesComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
