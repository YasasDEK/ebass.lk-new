import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-plumbers',
  templateUrl: './plumbers.component.html',
  styleUrls: ['./plumbers.component.scss']
})
export class PlumbersComponent implements OnInit {
  plumbers: Item[];
  isReceived: boolean = false;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getPlumber().subscribe(plumber => {
      this.plumbers = plumber;
      this.isReceived = true;


    });
  }

}

interface Item {
  id?: string;
  mail?: string;
  mobile?: string;
  land?: string;
  username?: string;
  firstname?: string;
}
