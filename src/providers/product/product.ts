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
  
  filter: Object = {label:''};
  products: any;
  groups: any[];

  constructor(public http: HttpClient) {
    http.get('http://localhost:8080/comanda/getGrupos').subscribe(data =>{        
            
      console.log(data);   
      this.groups = data;
      this.filter = {label: data[0].DESCRICAO, value: data[0].CONTROLE};   
    });
      
  }




}
