import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Calendar } from '@ionic-native/calendar';
import * as moment from 'moment';

/**
 * Generated class for the Home1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home1',
  templateUrl: 'home1.html',
})
export class Home1Page {
  private todo : FormGroup;
  homeList: any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private calendar: Calendar) {

    this.homeList = ['Milk', 'News Paper', 'Maid', 'School Bus'];
    
    this.todo = this.formBuilder.group({
      title: [''],
      description: [''],
      preferredLanguage: ['', Validators.required],
      milk: ['', Validators.required],
      newsPaper: ['', Validators.required],
      maid: ['', Validators.required],
      schoolBus: ['', Validators.required]
    });

    this.calendar.createCalendar('MyCalendar').then(
      (msg) => { console.log(msg); },
      (err) => { console.log(err); }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Home1Page');
  }

  logForm(){
    console.log(this.todo.value)
  }

  onDaySelect(eventData) {
    console.log('Date selected: ', eventData);
  }
}
