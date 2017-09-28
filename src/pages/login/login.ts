import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Account } from '../../models/account/account.interface';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  account = {} as Account;

  constructor(private afAuth: AngularFireAuth, private navCtrl: NavController, private navParams: NavParams) {
  }

  navigateToPage(pageName: string){
    pageName === 'TabsPage' ? this.navCtrl.setRoot(pageName) : this.navCtrl.push(pageName);
  }

  async login(){
    try{
      const result = await this.afAuth.auth.signInWithEmailAndPassword(this.account.email, this.account.password);
      console.log(result);
    }
    catch(e){
      console.error(e);
    }
  }
}
