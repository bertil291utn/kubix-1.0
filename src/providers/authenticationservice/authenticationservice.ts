import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { EnvironmentVarService } from '../environmentVarService/environmentVarService';
import { Platform } from 'ionic-angular';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

const TOKEN_KEY = 'auth-tokenkubix';
const USER_ID = 'user-idkubix';
@Injectable()
export class AuthenticationserviceProvider {
  authToken = null;
  // userId = null;
  ionic: any;
  authenticationState = new BehaviorSubject(false);

  constructor(public http: HttpClient, private storage: Storage,
    public myservices: EnvironmentVarService, private plt: Platform) {

    console.log('Hello AuthenticationserviceProvider Provider');

    this.checkToken();
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }


  checkToken() {
    return Promise.all([this.storage.get(TOKEN_KEY), this.storage.get(USER_ID)]).then(values => {
      console.log(values);
      if (values[0]) {
        this.authToken = values[0];
        this.authenticationState.next(true);
      }
      if (values[1]) {
        this.myservices.usuarioCedula = values[1];
      }
    });
  }


  login(userData, user_id) {
    console.log('userData.username: ', userData.username);
    userData.username = userData.username.substring(1);//remove first character
    user_id = user_id.substring(1);//remove first character para pasar solo la cedula
    const token = btoa(userData.username + ':' + userData.password);
    this.authToken = token;
    console.log('this is userid : ', user_id);
    //    this.userId = user_id;
    this.myservices.usuarioCedula = user_id;
    return new Promise(resolve => {
      Promise.all([this.storage.set(TOKEN_KEY, token), this.storage.set(USER_ID, user_id)]).then(() => {
        //console.log(userData, user_id)
        const userInfo = JSON.stringify(userData);
        // Aqui se guardan los datos del usuario
        this.saveSessionStorage(userInfo);
        this.authenticationState.next(true);
        resolve();
      });
    });
  }


  saveSessionStorage(userData) {
    const _promise = new Promise((resolve, reject) => {
      if (this.plt.is('cordova')) {
        if (userData) {
          //localStorage.setItem('ionic', JSON.stringify(this.ionic));
          this.storage.set('user', userData);
        }
      } else {
        if (userData) {
          const valUsername = userData;
          //localStorage.setItem('ionic', JSON.stringify(this.ionic));
          localStorage.setItem('user', valUsername);
        }
      }
    });
    return _promise;
  }


  public logOut() {
    return Promise.all([this.storage.remove(TOKEN_KEY), this.storage.remove(USER_ID)])
      .then(() => {
        this.authenticationState.next(false);
        this.authToken = null;
        this.myservices.usuarioCedula = null;
        //this.myservices.userData = null;
        localStorage.removeItem('user');
        this.storage.clear();
      });
  }





}//end class
