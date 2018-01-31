import { App } from 'ionic-angular';
import { Component } from '@angular/core';
import { ProductProvider } from '../../providers/product/product';
import { AddProductPage } from '../../pages/add-product/add-product';
import { AddPizzaPage } from '../../pages/add-pizza/add-pizza';

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
  
  constructor(public prodProv: ProductProvider, private app: App) {    
    
  }

  addProduct(obj){
    if (obj.pizza){
      this.app.getRootNav().setRoot(AddPizzaPage);
    } else {
      this.app.getRootNav().setRoot(AddProductPage);
    }
  }

}
