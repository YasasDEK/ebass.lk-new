import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-carpenters',
  templateUrl: './carpenters.component.html',
  styleUrls: ['./carpenters.component.scss']
})
export class CarpentersComponent implements OnInit {
  carpenters: Item[];

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getCarpenter().subscribe(carpenter => {
      this.carpenters = carpenter;
    });
  }

}
interface Item {
  id?: string;
  mail?: string;
  land?: string;
  username?: string;
  firstname?: string;
 }