import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curiers-list',
  templateUrl: './curiers-list.component.html',
  styleUrls: ['./curiers-list.component.less']
})
export class CuriersListComponent implements OnInit {

  constructor() { }

  items: any[];
  itemCount =  0;

  ngOnInit() {
    this.items = [{name: 'marek', surname: '33'}]
    this.itemCount = this.items.length;
  }

}
