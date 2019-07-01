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

  private _userData = { foto: null, primer_nombre: null, segundo_nombre: null, primer_apellido: null, email: null, celular: null };
  public get userData() {
    return this._userData;
  }
  public set userData(value) {
    this._userData = value;
  }

  private _usuarioCedula: string;
  public get usuarioCedula(): string {
    return this._usuarioCedula;
  }
  public set usuarioCedula(value: string) {
    this._usuarioCedula = value;
  }



}
