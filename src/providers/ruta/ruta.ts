import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class RutaProvider {
  private _origenLatLng;
  public get origenLatLng() {
    return this._origenLatLng;
  }
  public set origenLatLng(value) {
    this._origenLatLng = value;
  }
  private _origenDir: string;
  public get origenDir(): string {
    return this._origenDir;
  }
  public set origenDir(value: string) {
    this._origenDir = value;
  }
  private _destinoLatLng;
  public get destinoLatLng() {
    return this._destinoLatLng;
  }
  public set destinoLatLng(value) {
    this._destinoLatLng = value;
  }
  private _destinoDir: string;
  public get destinoDir(): string {
    return this._destinoDir;
  }
  public set destinoDir(value: string) {
    this._destinoDir = value;
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


  constructor() {
    console.log('Hello RutaProvider Provider');
  }



}
