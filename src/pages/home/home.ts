import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  movies: any;
  constructor(public navCtrl: NavController,
    public restProvider: RestProvider,
    private alertCtrl: AlertController) {
      this.getMovies();
  }

  getMovies() {
    this.restProvider.getMovies()
    .then(data => {
      this.movies = data;
      console.log(this.movies);
    });
  }

  buttonClick() {
    console.log("here");
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Pay With Card',
      inputs: [
        {
          name: 'Card Number',
          placeholder: 'Card Number'
        },
        {
          name: 'CVV2',
          placeholder: 'CVV2',
        },
        {
          name: 'Expiry Month',
          placeholder: 'MM'
        },
        {
          name: 'Expiry Year',
          placeholder: 'YY'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Buy Ticket',
          handler: data => {
          }
        }
      ]
    });
    alert.present();
  }

}
