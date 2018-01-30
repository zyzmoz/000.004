import { Component } from '@angular/core';

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

  products: any[] = [
    {
      descricao: "Super hyper blast plus advanced lanche 3.0 coom bacon do inferno de dante"
    },
    {
      descricao: "Pr2"
    }
  ];

  constructor() {    
    
  }

}
