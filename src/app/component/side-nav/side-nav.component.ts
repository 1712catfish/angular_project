import { Component } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  numbers: number[];
  constructor() {
    this.numbers = Array(100).fill(0).map((x,i)=>i); // [0,1,2,3,4]
  }
}
