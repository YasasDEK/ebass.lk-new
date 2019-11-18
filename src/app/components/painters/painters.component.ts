import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-painters',
  templateUrl: './painters.component.html',
  styleUrls: ['./painters.component.scss']
})
export class PaintersComponent implements OnInit {
  painters: Item[];
  isReceived:boolean=false;


  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getPaint().subscribe(painter => {
      this.painters = painter;
      this.isReceived=true;

    });
  }

}
interface Item {
  id?: string;
  mail?: string;
  mobile?: string;
  username?: string;
  firstname?: string;
}
