import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as _ from 'lodash';
import { HomeServiceProvider } from '../home-service/home-service';

@Injectable()
export class RestApiServiceProvider {

  mainBasePath = 'http://192.168.64.166:8080/ords/appkubix/';
  userBasePathUser = 'usuarios/';
  vehiculoBasePathUser = 'vehiculos/';

  constructor(public http: HttpClient, public myservices: HomeServiceProvider) {
    console.log('Hello RestApiServiceProvider Provider');
  }


  //USUARIOS/PERSONAS

  public getUsuario(): Observable<any> {
    let url = this.userBasePathUser + 'usuarioinfo/' + this.myservices.usuarioCedula;
    return this.makeRequestGet(url);
  }

  //Para anadir en la tabla  de ususario en caso de que no exista todavia  
  public postUsuario(): Observable<any> {
    let url = this.userBasePathUser + 'usuarioinfo/' + this.myservices.usuarioCedula;
    return this.makeRequestPost(url);
  }

  public getUsuarioPreferences(): Observable<any> {
    let url = this.userBasePathUser + 'usuariopreferences?cedula=' + this.myservices.usuarioCedula;
    return this.makeRequestGet(url)
  }

  public updateProfilePreferences(cedula: string, codigo_preferencia: number, nivel: number, celular: string): Observable<any> {
    let url = this.userBasePathUser + `usuariopreferences?cedula=${this.myservices.usuarioCedula}&codigo_preferencia=${codigo_preferencia}&nivel=${nivel}&celular=${celular}`;
    return this.makeRequestPut(url, false);
  }


  //VEHICULOS

  public getMarcaModelo(modelo?: number): Observable<any> {
    let url;
    if (modelo != null || undefined)//Si modelo tiene valores entonces anadir a la url con el parametro de modelo
      url = this.vehiculoBasePathUser + 'marcamodelo?modelo=' + modelo;//Si tiene 
    else
      url = this.vehiculoBasePathUser + 'marcamodelo';//caso contrario unicamnete se listaran mas marcas sin los modelos
    return this.makeRequestGet(url);
  }

  public updateAutomovil(data: any, codigoVehiculo?: number): Observable<any> {
    let url;
    if (codigoVehiculo != null || undefined || '')
      url = this.vehiculoBasePathUser + `informacion?cedula=${this.myservices.usuarioCedula}&codigo_vehiculo=${codigoVehiculo}&placa=${data.placa}&color=${data.color}&modelo=${data.modelo}`;
    else
      url = this.vehiculoBasePathUser + `informacion?cedula=${this.myservices.usuarioCedula}&placa=${data.placa}&color=${data.color}&modelo=${data.modelo}`;
    let body = { 'foto': data.foto }
    return this.makeRequestPut(url, true, body);
  }

  public getVehiculoInfo(): Observable<any> {
    let url = this.vehiculoBasePathUser + 'informacion?cedula=' + this.myservices.usuarioCedula;
    return this.makeRequestGet(url);
  }





  private makeRequestPost(url: string, body?) {
    return this.http.post(this.mainBasePath + url, body, { responseType: 'json' });
  }

  private makeRequestGet(url: string) {
    return this.http.get(this.mainBasePath + url, { responseType: 'json' });
  }

  private makeRequestPut(url: string, header: boolean, body?) {
    if (header)
      return this.http.put(this.mainBasePath + url, body, { headers: this.headersHttp(), responseType: 'json' });
    else
      return this.http.put(this.mainBasePath + url, body, { responseType: 'json' });
  }

  private headersHttp() {
    const httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    return httpHeaders;
  }



}//end class
