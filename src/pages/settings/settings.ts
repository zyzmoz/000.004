import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { TabsPage } from '../../pages/tabs/tabs';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
*/

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  settings : any = {
    server: '',
    port: '',
    ope: 0,
    mesa: false,
    desc: false,
    admin: 'admin'
  }

  showPwd = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private app: App) {
  }

  ionViewDidLoad() {
    const st = JSON.parse(localStorage.getItem('settings'));
    console.log(st);    
    if (st)
      this.settings = st;     
  }

  save(){
    localStorage.setItem('settings', JSON.stringify(this.settings));
    this.app.getRootNav().setRoot(TabsPage);
  }

}
