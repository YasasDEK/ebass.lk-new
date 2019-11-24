import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-carpenters',
  templateUrl: './carpenters.component.html',
  styleUrls: ['./carpenters.component.scss']
})
export class CarpentersComponent implements OnInit {
  carpenters: Item[];
  isReceived: boolean = false;


  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getCarpenter().subscribe(carpenter => {
      this.carpenters = carpenter;
      this.isReceived = true;

    });
  }

}
interface Item {
  uid?: string;
  workername?: string;
  idNumber?: string;
  email?: string;
  emailVerified?: boolean;
  jobType?: string;
  mobile?: string;
}