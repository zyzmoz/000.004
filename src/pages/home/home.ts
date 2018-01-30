import { Component, } from '@angular/core';

import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private ac : AlertController) {

  }

  goSettings(){
    
    let alert = this.ac.create({
      title: "Informe a senha:",   
      cssClass: 'buttonCss',       
      inputs: [
        {
          name: "password",
          placeholder: "Senha",
          type: "password"     
        }
      ],
      buttons: [
        {
          text: "Cancelar",
          role: "cancel",            
          handler: data => {          
          }
        },
        {
          text: "Confirmar",
          role: "cancel",
          handler: data => {
            if(data.password === 'abc123'){                      
              return true;
            }             
            return false;
          }
        }
      ]
    });
    alert.present();
  }

}
