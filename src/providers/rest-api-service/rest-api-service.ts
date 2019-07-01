import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as _ from 'lodash';

@Injectable()
export class RestApiServiceProvider {

  mainBasePath = 'http://192.168.64.166:8080/ords/appkubix/';
  userBasePathUser = 'usuarios/';

  constructor(public http: HttpClient) {
    console.log('Hello RestApiServiceProvider Provider');
  }

  public getUsuario(data: string): Observable<any> {
    let url = this.userBasePathUser + 'usuarioinfo/' + data;
    return this.makeRequestGet(url);
  }

  //Para anadir en la tabla  de ususario en caso de que no exista todavia  
  public postUsuario(data: string): Observable<any> {
    let url = this.userBasePathUser + 'usuarioinfo/' + data;
    return this.makeRequestPost(url);
  }

  public getUsuarioPreferences(data: string): Observable<any> {
    let url = this.userBasePathUser + 'usuariopreferences?cedula=' + data;
    return this.makeRequestGet(url)
  }

  public updateProfilePreferences(cedula: string, codigo_preferencia: number, nivel: number): Observable<any> {
    let url = this.userBasePathUser + `usuariopreferences?cedula=${cedula}&codigo_preferencia=${codigo_preferencia}&nivel=${nivel}`;
    return this.makeRequestPut(url);
  }







  private makeRequestPost(url: string, body?) {
    return this.http.post(this.mainBasePath + url, body);
  }

  private makeRequestGet(url: string, body?) {
    return this.http.get(this.mainBasePath + url, body);
  }

  private makeRequestPut(url: string, body?) {
    return this.http.put(this.mainBasePath + url, body);
  }


  public groupJsonObject(enterArray, propiedad: string) {
    return _.mapValues(_.groupBy(enterArray, propiedad), x => x.map(y => _.omit(y, propiedad)));

  }



}//end class
