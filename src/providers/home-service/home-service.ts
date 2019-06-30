import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class HomeServiceProvider {
  private _solicitud: boolean;
  public get solicitud(): boolean {
    return this._solicitud;
  }
  public set solicitud(value: boolean) {
    this._solicitud = value;
  }
  private _pasajero: boolean;
  public get pasajero(): boolean {
    return this._pasajero;
  }
  public set pasajero(value: boolean) {
    this._pasajero = value;
  }
  private _conductor: boolean;
  public get conductor(): boolean {
    return this._conductor;
  }
  public set conductor(value: boolean) {
    this._conductor = value;
  }

  private _carExists: boolean;
  public get carExists(): boolean {
    return this._carExists;
  }
  public set carExists(value: boolean) {
    this._carExists = value;
  }

  private _profileExists: boolean;
  public get profileExists(): boolean {
    return this._profileExists;
  }
  public set profileExists(value: boolean) {
    this._profileExists = value;
  }

  private _userdata: any;
  public get userdata(): any {
    return this._userdata;
  }
  public set userdata(value: any) {
    this._userdata = value;
  }
  constructor() {
    console.log('Hello HomeServiceProvider Provider');
  }



}
