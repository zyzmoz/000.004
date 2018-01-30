import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { ProductProvider } from '../../providers/product/product';

/**
 * Generated class for the SearchComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'search',
  templateUrl: 'search.html'
})
export class SearchComponent {

  searchQuery : string = '';
  

  constructor(private ac: AlertController, public prodProv: ProductProvider) {    
    
  }

  getItems(ev: any){
    let val = ev.target.value;
  }

  setFilter(){
    const options = []; 
    this.prodProv.groups.map((obj, index) => {
      options.push({
        type: "radio",
        label: obj.DESCRICAO,
        value:  obj.CONTROLE,
        checked: false       
      });
    });

    options.map((data, index) => {
      options[index] = { ...data, checked: this.prodProv.filter.value === data.value};
    });

    let alert = this.ac.create({
      title: "Filtro",
      cssClass:"buttonCss",
      inputs: options,
      buttons: [
        {
          text: "Cancelar",
          role: "cancel"
        },
        {
          text: "Confirmar",
          handler: data => {
            const { value, label } = options.filter((obj) => {
              return obj.value == data;
            })[0];
            this.prodProv.filter = {value, label};
          }
        }
      ]
    }); 
    
 

    alert.present();


  }

}
