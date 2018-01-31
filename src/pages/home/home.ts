import { Component, } from '@angular/core';

import { NavController, AlertController, App } from 'ionic-angular';
import { SettingsPage } from '../../pages/settings/settings';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private ac : AlertController,private app: App) {

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
            const settings = JSON.parse(localStorage.getItem('settings'));
            let admin;
            if(settings)
              admin = settings.admin;
            if((!admin) || (data.password === admin)){    
              this.app.getRootNav().setRoot(SettingsPage);
              
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
