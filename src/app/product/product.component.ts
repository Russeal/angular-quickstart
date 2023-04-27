import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  private productName: string;
  public product


  constructor (private route: ActivatedRoute, private itemService: ItemService) {

  }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.productName = params["id"];
      }
    );

    for (const item of this.itemService.getItemsList()) {
      if (item.name == this.productName) {
        this.product = item;
      }
    }
  }

  public numberWithSpaces(x) {
    let parts = x.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    return parts.join('.');
  }
}
