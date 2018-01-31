import { Component } from '@angular/core';
import { ProductProvider } from '../../providers/product/product';

/**
 * Generated class for the ProductListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'product-list',
  templateUrl: 'product-list.html'
})
export class ProductListComponent {
  
  constructor(public prodProv: ProductProvider) {    
    
  }

}
