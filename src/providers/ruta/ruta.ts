import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class RutaProvider {

  private _origen: any;
  public get origen(): any {
    return this._origen;
  }
  public set origen(value: any) {
    this._origen = value;
  }
  private _destino: any;
  public get destino(): any {
    return this._destino;
  }
  public set destino(value: any) {
    this._destino = value;
  }

  private _lugares: any = [];
  public get lugares(): any {
    return this._lugares;
  }
  public set lugares(value: any) {
    this._lugares.push(value);
  }
  resetLugares() {
    this._lugares = [];
  }


  private _puntoEncuentro: any;
  public get puntoEncuentro(): any {
    return this._puntoEncuentro;
  }
  public set puntoEncuentro(value: any) {
    this._puntoEncuentro = value;
  }

  private _adicional: any;//numero pasajeros, descripcionadicional
  public get adicional(): any {
    return this._adicional;
  }
  public set adicional(value: any) {
    this._adicional = value;
  }


  public groupBy = key => array =>
    array.reduce((objectsByKeyValue, obj) => {
      const value = obj[key];
      objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
      return objectsByKeyValue;
    }, {});


  constructor() {
    console.log('Hello RutaProvider Provider');
  }



}
