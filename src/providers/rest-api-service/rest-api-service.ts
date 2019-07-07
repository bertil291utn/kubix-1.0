import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as _ from 'lodash';
import { EnvironmentVarService } from '../environmentVarService/environmentVarService';

@Injectable()
export class RestApiServiceProvider {

  mainBasePath = 'http://192.168.64.166:8080/ords/appkubix/';
  userBasePathUser = 'usuarios/';
  vehiculoBasePathUser = 'vehiculos/';
  lugarGeoBasePathUser = 'lugargeo/';


  constructor(public http: HttpClient, public myservices: EnvironmentVarService) {
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

  public updateAutomovil(data: any): Observable<any> {
    let url = this.vehiculoBasePathUser + `informacion?cedula=${this.myservices.usuarioCedula}&placa=${data.placa}&color=${data.color}&modelo=${data.modelo}`;
    return this.makeRequestPut(url, false, data.foto);
  }

  public getVehiculoInfo(): Observable<any> {
    let url = this.vehiculoBasePathUser + 'informacion?cedula=' + this.myservices.usuarioCedula;
    return this.makeRequestGet(url);
  }

  //LUGAR GEO 
  //GETCASA 
  public getCasaInfo(): Observable<any> {
    let url = this.lugarGeoBasePathUser + 'casa?cedula=' + this.myservices.usuarioCedula;
    return this.makeRequestGet(url);
  }

  //INSERT UPDATE CASA

  public updateCasa(data: any): Observable<any> {
    let url = this.lugarGeoBasePathUser + `casa?cedula=${this.myservices.usuarioCedula}&latitud=${data.lat}
      &longitud=${data.lng}&short_name=${data.short_name}&full_name=${data.full_name}`;
    return this.makeRequestPut(url, false);
  }


  //UNIVERSIDAD
  public getUniversidadInfo(): Observable<any> {
    let url = this.lugarGeoBasePathUser + 'universidad';
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
