import { Component, OnInit } from '@angular/core';
import { ShopsAndCompaniesService } from 'app/services/shops-and-companies.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {

  items: Array<any>;

  constructor(private firebaseService: ShopsAndCompaniesService) { }

  ngOnInit() {
    this.firebaseService.getCompanies()
    .subscribe(result => {
      this.items = result;
    })
  }


}
