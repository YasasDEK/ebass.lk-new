import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-electricians',
  templateUrl: './electricians.component.html',
  styleUrls: ['./electricians.component.scss']
})
export class ElectriciansComponent implements OnInit {
  electricians: Item[];
  isReceived:boolean = false;


  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getElectrician().subscribe(electrician => {
      this.electricians = electrician;
      this.isReceived=true;
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
