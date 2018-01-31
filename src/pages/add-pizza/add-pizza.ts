import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { TabsPage } from '../../pages/tabs/tabs';

/**
 * Generated class for the AddProdutoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-pizza',
  templateUrl: 'add-pizza.html',
})
export class AddPizzaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddProdutoPage');
  }

  cancel(){
    this.app.getRootNav().setRoot(TabsPage);
  }

}
