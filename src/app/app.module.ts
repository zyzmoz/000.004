import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MyApp } from './app.component';

import { SearchComponent } from '../components/search/search';
import { ProductListComponent } from '../components/product-list/product-list';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProductProvider } from '../providers/product/product';

@NgModule({
  declarations: [
    MyApp,    
    SearchComponent,
    ProductListComponent,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,   
    SearchComponent,
    ProductListComponent, 
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},    
    ProductProvider
  ]
})
export class AppModule {}
