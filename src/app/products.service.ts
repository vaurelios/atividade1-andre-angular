import { Injectable } from '@angular/core';
import { Product }    from './product';
import { PRODUCTS }   from './mock-products';

@Injectable()
export class ProductsService {

  constructor() { }

  getProducts(): Product[] {
    return PRODUCTS;
  }

  getProductByCod(cod: string): Product {
    for (let product of this.getProducts()) {
      if (product.cod === cod)
        return product;
    }

    throw new RangeError('Product with code ' + cod + 'doesnt existis!');
  }

  getOffers(): Product[] {
    return this.getProducts().filter(product => {
      if (product.promo === undefined || product.promo < 1)
        return false;

      return true;
    });
  }
}
