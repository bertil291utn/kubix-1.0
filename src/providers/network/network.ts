import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network';
import { AlertController, Events } from 'ionic-angular';

export enum ConnectionStatusEnum {
  Online,
  Offline
}


@Injectable()
export class NetworkProvider {
  previousStatus;

  constructor(public http: HttpClient, public alertCtrl: AlertController,
    public network: Network,
    public eventCtrl: Events) {
    console.log('Hello NetworkProvider Provider');
    if (navigator.onLine)
      this.previousStatus = ConnectionStatusEnum.Online;
    else
      this.previousStatus = ConnectionStatusEnum.Offline;
  }

  public initializeNetworkEvents(): void {
    this.network.onDisconnect().subscribe(() => {
      if (this.previousStatus === ConnectionStatusEnum.Online) {
        this.eventCtrl.publish('network:offline');
      }
      this.previousStatus = ConnectionStatusEnum.Offline;
    });
    this.network.onConnect().subscribe(() => {
      if (this.previousStatus === ConnectionStatusEnum.Offline) {
        this.eventCtrl.publish('network:online');
      }
      this.previousStatus = ConnectionStatusEnum.Online;
    });
  }




}//end class
