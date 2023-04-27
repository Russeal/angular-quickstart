import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  category: string; 
  public ads;

  categories = [
    {
      name: "Elektronika"
    },
    {
      name: "Texnika"
    },
    {
      name: "Go'zallik"
    },
    {
      name: "Qurilish"
    },
    {
      name: "Oshxona jihozi"
    }
  ];

  constructor (private route: ActivatedRoute, private itemsService: ItemService) {

  }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.category = params["id"]
      }
    );

    this.ads = this.itemsService.getItemsList();
  }

  public getPerMonth (x) {
    return Math.round(x / 12)
  }
}
