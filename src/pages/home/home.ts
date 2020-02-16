import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Home1Page } from '../home1/home1';
// import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
    // private storage: Storage
    ) {
    console.log('This is home page..');
  }

  todo = {}
  logForm() {
    console.log(this.todo);
    this.navCtrl.push(Home1Page);
  }

}
