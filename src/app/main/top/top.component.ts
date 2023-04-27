import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {
  public ads;

  constructor(private itemsService: ItemService) { }

  ngOnInit() {
    this.ads = this.itemsService.getItemsList();
  }

  public getPerMonth (x) {
    return Math.round(x / 12)
  }

}
