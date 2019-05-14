import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class HomeServiceProvider {
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

  constructor() {
    console.log('Hello HomeServiceProvider Provider');
  }



}
