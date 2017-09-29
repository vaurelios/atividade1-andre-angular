import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';
import { ProductsService }   from '../products.service';
import { Product }           from '../product';

@Component({
  selector: 'app-product-page',
  host: {
    class: 'row bg-light py-3'
  },
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
  providers: [ProductsService]
})
export class ProductPageComponent implements OnInit {
  product: Product;

  constructor(private route: ActivatedRoute, private productsService: ProductsService) {
    route.params.subscribe(params => {
      this.product = productsService.getProductByCod(params['cod']);
    });
  }

  ngOnInit() {
  }

}
