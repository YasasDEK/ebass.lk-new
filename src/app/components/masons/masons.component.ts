import { Component, OnInit } from '@angular/core';
import {ItemService} from '../../services/item.service';


@Component({
  selector: 'app-masons',
  templateUrl: './masons.component.html',
  styleUrls: ['./masons.component.scss']
})
export class MasonsComponent implements OnInit {

  masons: Item[];
  isReceived: boolean = false;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getMason().subscribe(mason => {
      this.masons = mason;
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
