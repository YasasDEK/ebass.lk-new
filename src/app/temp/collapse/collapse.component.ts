import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss']
})
export class CollapseComponent implements OnInit {
  public isCollapsed = false;
  public isCollapsed2 = false;
  public isCollapsed1 = false;
  public isMenuCollapsed = true;
  currentJustify = 'start';
  



  constructor() {
    if(this.isCollapsed){
       this.isCollapsed2 = false;
       this.isCollapsed1 = false;
    }
    


   }

  ngOnInit() {

    // checkCollapse(this.isCollapsed,this.isCollapsed1,this.isCollapsed2)

    
  }


  // checkCollapse(this.isCollapsed,this.isCollapsed1,this.isCollapsed2){
    


}
