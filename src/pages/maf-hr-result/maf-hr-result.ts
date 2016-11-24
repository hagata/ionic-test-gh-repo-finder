import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the MafHrResult page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-maf-hr-result',
  templateUrl: 'maf-hr-result.html'
})
export class MafHrResultPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello MafHrResultPage Page');
  }

}
