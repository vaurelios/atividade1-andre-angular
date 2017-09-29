import { Component, OnInit } from '@angular/core';
import { ProductsService }   from '../products.service';
import { Product }           from '../product';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css'],
  providers: [ProductsService]
})
export class ProductsPageComponent implements OnInit {
  products: Product[];

  constructor(private productsService: ProductsService) {
    this.products = productsService.getProducts();
  }

  ngOnInit() {
  }

}
