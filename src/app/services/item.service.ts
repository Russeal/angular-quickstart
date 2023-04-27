import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  public getItemsList() {
    // api request will be here
    return [
      {
        name: "Kir yuvish kukuni, TIDE, 3kg",
        price: 59000,
        star: 4.9,
        purchasedNum: 309,
        category: "Go'zallik",
        isInSale: true,
        imageLink: "https://images.uzum.uz/cglap9r57mg9720dj30g/t_product_540_high.jpg#1681115177724"
      },
      {
        name: "Tualet qog'ozi ESTY, 6 dona",
        price: 13000,
        star: 5,
        purchasedNum: 18,
        category: "Go'zallik",
        isInSale: false,
        imageLink: "https://images.uzum.uz/cd1encjb3ho5lmuq3680/t_product_540_high.jpg#1681117070590"
      },
      {
        name: "Suyuq Sovun Krem Pegas, 1 litr",
        price: 14000,
        star: 4.9,
        purchasedNum: 210,
        category: "Go'zallik",
        isInSale: true,
        imageLink: "https://images.uzum.uz/cdcbjt35a95unf1392jg/t_product_540_high.jpg#1681117072942"
      },
      {
        name: "Skavarodka Kukmara Granit, (Blue)",
        price: 170000,
        star: 5,
        purchasedNum: 10,
        category: "Oshxona jihozi",
        isInSale: true,
        imageLink: "https://images.uzum.uz/cdb5a4rb3ho5lmur47kg/t_product_540_high.jpg#1681117072943"
      },
      {
        name: "Kir yuvish kukuni, TIDE, 3kg",
        price: 59000,
        star: 4.9,
        purchasedNum: 309,
        category: "Go'zallik",
        isInSale: true,
        imageLink: "https://images.uzum.uz/cglap9r57mg9720dj30g/t_product_540_high.jpg#1681115177724"
      },
      {
        name: "Kir yuvish kukuni, TIDE, 3kg",
        price: 59000,
        star: 4.9,
        purchasedNum: 309,
        category: "Go'zallik",
        isInSale: true,
        imageLink: "https://images.uzum.uz/cglap9r57mg9720dj30g/t_product_540_high.jpg#1681115177724"
      },
      {
        name: "Changyutgich Bosch BGC21X300",
        price: 1762000,
        star: 4.9,
        purchasedNum: 17,
        category: "Texnika",
        isInSale: true,
        imageLink: "https://images.uzum.uz/cf9r2b0l08k0o9qiiid0/original.jpg"
      },
      {
        name: "Kir yuvish kukuni, TIDE, 3kg",
        price: 59000,
        star: 4.9,
        purchasedNum: 309,
        category: "Go'zallik",
        isInSale: true,
        imageLink: "https://images.uzum.uz/cglap9r57mg9720dj30g/t_product_540_high.jpg#1681115177724"
      },
      {
        name: "Kir yuvish kukuni, TIDE, 3kg",
        price: 59000,
        star: 4.9,
        purchasedNum: 309,
        category: "Go'zallik",
        isInSale: true,
        imageLink: "https://images.uzum.uz/cglap9r57mg9720dj30g/t_product_540_high.jpg#1681115177724"
      },
    ]
  }
}
