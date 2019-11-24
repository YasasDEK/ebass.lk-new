import { Component, OnInit } from '@angular/core';
import { ShopsAndCompaniesService } from 'app/services/shops-and-companies.service';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.scss']
})
export class ShopsComponent implements OnInit {

  items: Array<any>;

  constructor(private firebaseService: ShopsAndCompaniesService) { }

  ngOnInit() {
    this.firebaseService.getShops()
    .subscribe(result => {
      this.items = result;
    })
  }

}
