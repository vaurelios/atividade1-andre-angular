import { Component, OnInit } from '@angular/core';
import { Product }           from '../product';
import { ProductsService }   from '../products.service';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.css'],
  providers: [ProductsService]
})
export class IndexPageComponent implements OnInit {
  ofertas: Product[];

  constructor(private productsService: ProductsService) {
    this.ofertas = productsService.getOffers();
  }

  ngOnInit() {
  }

}
