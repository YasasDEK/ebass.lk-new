import { Component, OnInit } from '@angular/core';
import {ItemService} from '../../services/item.service';

@Component({
  selector: 'app-repairs',
  templateUrl: './repairs.component.html',
  styleUrls: ['./repairs.component.scss']
})
export class RepairsComponent implements OnInit {
  repairs: Item[];
  isReceived:boolean=false;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getRepair().subscribe(repair => {
      this.repairs = repair;
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

