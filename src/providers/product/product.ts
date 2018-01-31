import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the ProductProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductProvider {
  
  filter: any = {label:'', value: ''};
  searchStr: string = '';
  products: any;
  groups: any;

  constructor(public http: HttpClient) {    
    this.groups = [
      {
        label: 'Bebidas',
        value: 1
      },
      {
        label: 'Todos',
        value: 0
      },
      {
        label: 'Pizzas',
        value: 2
      },
      {
        label: 'Burgers',
        value: 3
      }
    ]
    this.filter = this.groups[0];
    
    if (JSON.parse(localStorage.getItem('settings')).pizza){
      this.products = [
        {
          description: 'Pizza',
          ean: 0,
          value: 0,
          group: 0,
          pizza: true
        }
      ]
    } else {
      this.products = [];
    }

    this.products = [...this.products,
      {
        description: 'Coke',
        ean: 789789789912,
        value: 5.50,
        group: 1,
        pizza: false
      },
      {
        description: 'Beer',
        ean: 789987987321,
        value: 5.50,
        group: 1,        
        unavailable: true,
        pizza: false
      },
      {
        description: 'Burger',
        ean: 1011,
        value: 17.50,
        group: 3,
        pizza: false
      },
      
    ]
      
  }

  setGroup(obj){
    this.filter = obj;
    //console.log(this.filter);    
    if (this.filter.value !== 0)
      this.products = this.products.filter(product => product.group === this.filter.value);
  }

  



}
