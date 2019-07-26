import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EnvironmentVarService } from '../environmentVarService/environmentVarService';

@Injectable()
export class RestApiServiceProvider {

  // mainBasePath = 'http://192.168.31.128:8080/ords/appkubix/';
  mainBasePath = 'http://cloud1.utn.edu.ec:9071/ords/acad_micoa5/appkubix/';
  userBasePathUser = 'usuarios/';
  vehiculoBasePathUser = 'vehiculos/';
  lugarGeoBasePathUser = 'lugargeo/';
  rutaBasePathUser = 'ruta/';
  mainBasePathAlt = 'http://cloud1.utn.edu.ec:9071/ords/acad_micoa5/apk/';

  constructor(public http: HttpClient, public myservices: EnvironmentVarService) {
    console.log('Hello RestApiServiceProvider Provider');
  }


  //USUARIOS/PERSONAS

  public getUsuario(otherUser?: string): Observable<any> {
    let url;
    if (otherUser != null || undefined)
      url = 'usuarioinfo/' + otherUser;
    else
      url = 'usuarioinfo/' + this.myservices.usuarioCedula;
    return this.makeRequestGet(url);
  }

  //Para anadir en la tabla  de ususario en caso de que no exista todavia  
  // public verificarUsuarioExists(): Observable<any> {
  //   let url = this.userBasePathUser + 'usuarioinfo/' + this.myservices.usuarioCedula;
  //   return this.makeRequestPost(url);
  // }

  public verificarUsuarioExists(): Observable<any> {
    let url = 'usuarioinfo/' + this.myservices.usuarioCedula;
    return this.makeRequestPost(url);
  }

  public getUsuarioPreferences(otherUser?: string): Observable<any> {
    let url;
    if (otherUser != null || undefined)
      url = 'usuariopreferences?cedula=' + otherUser;
    else
      url = 'usuariopreferences?cedula=' + this.myservices.usuarioCedula;
    return this.makeRequestGet(url)
  }

  // public updateProfilePreferences(cedula: string, codigo_preferencia: number, nivel: number, celular: string): Observable<any> {
  //   let url = `usuariopreferences?cedula=${this.myservices.usuarioCedula}&codigo_preferencia=${codigo_preferencia}&nivel=${nivel}&celular=${celular}`;
  //   return this.makeRequestPut(url, false);
  // }


  public updateProfilePreferences(codigo_preferencia: number, nivel: number, celular: string): Observable<any> {
    let url = 'usuariopreferences';
    let httpHeaders = new HttpHeaders().set('cedula', this.myservices.usuarioCedula);
    httpHeaders = httpHeaders.append('codigo_preferencia', `${codigo_preferencia}`);
    httpHeaders = httpHeaders.append('nivel', `${nivel}`);
    httpHeaders = httpHeaders.append('celular', `${celular}`);
    return this.makeRequestPut(url, httpHeaders);
  }


  //VEHICULOS

  public getMarcaModelo(modelo?: number): Observable<any> {
    let url;
    if (modelo != null || undefined)//Si modelo tiene valores entonces anadir a la url con el parametro de modelo
      url = 'marcamodelo?modelo=' + modelo;//Si tiene 
    else
      url = 'marcamodelo';//caso contrario unicamnete se listaran mas marcas sin los modelos
    return this.makeRequestGet(url);
  }

  public updateAutomovil(data: any): Observable<any> {
    // let url = this.vehiculoBasePathUser + `informacion?cedula=${this.myservices.usuarioCedula}&placa=${data.placa}&color=${data.color}&modelo=${data.modelo}`;
    let url = 'informacion';
    let httpHeaders = new HttpHeaders().set('cedula', `${this.myservices.usuarioCedula}`);
    httpHeaders = httpHeaders.append('color', `${data.color}`);
    httpHeaders = httpHeaders.append('modelo', `${data.modelo}`);
    httpHeaders = httpHeaders.append('placa', `${data.placa}`);
    return this.makeRequestPut(url, httpHeaders, data.foto);
  }

  public getVehiculoInfo(conductor?: string): Observable<any> {
    let url;
    if (conductor != null || undefined)
      url = 'informacion?cedula=' + conductor;
    else
      url = 'informacion?cedula=' + this.myservices.usuarioCedula;
    return this.makeRequestGet(url);
  }

  //LUGAR GEO 
  //GETCASA 
  public getCasaInfo(): Observable<any> {
    let url = 'casa?cedula=' + this.myservices.usuarioCedula;
    return this.makeRequestGet(url);
  }

  //INSERT UPDATE CASA

  public updateCasa(data: any): Observable<any> {
    // let url = this.lugarGeoBasePathUser + `casa?cedula=${this.myservices.usuarioCedula}&latitud=${data.lat}
    //   &longitud=${data.lng}&short_name=${data.short_name}&full_name=${data.full_name}`;
    let url = 'casa';
    let httpHeaders = new HttpHeaders().set('cedula', `${this.myservices.usuarioCedula}`);
    httpHeaders = httpHeaders.append('latitud', `${data.lat}`);
    httpHeaders = httpHeaders.append('longitud', `${data.lng}`);
    httpHeaders = httpHeaders.append('short_name', `${data.short_name}`);
    httpHeaders = httpHeaders.append('full_name', `${data.full_name}`);
    return this.makeRequestPut(url, httpHeaders);
  }


  //UNIVERSIDAD
  public getUniversidadInfo(): Observable<any> {
    let url = 'universidad';
    return this.makeRequestGet(url);
  }

  // PUBLICAR VIAJE CONDUCTOR
  public insertarViaje(data: any): Observable<any> {
    // let url = this.rutaBasePathUser + `publicacion?fecha=${data.fecha}&descripcion=${data.descripcion}&cedula=${this.myservices.usuarioCedula}`;
    let url = 'publicacion';
    let httpHeaders = new HttpHeaders().set('cedula', `${this.myservices.usuarioCedula}`);
    httpHeaders = httpHeaders.append('fecha', `${data.fecha}`);
    httpHeaders = httpHeaders.append('descripcion', `${data.descripcion}`);
    httpHeaders = httpHeaders.append('no_personas', `${data.personas}`);
    return this.makeRequestPost(url, httpHeaders);//anadir nopersonas
  }


  public insertarLugaresGeoViaje(data: any, codigo_viaje: number, tipo: string): Observable<any> {
    let url = 'publicacion';
    let httpHeaders = new HttpHeaders().set('tipo', `${tipo}`);
    httpHeaders = httpHeaders.append('codigo_viaje', `${codigo_viaje}`);

    if (tipo == 'U') {
      httpHeaders = httpHeaders.append('latitud', `${data.lat}`);
      httpHeaders = httpHeaders.append('longitud', `${data.lng}`);
      httpHeaders = httpHeaders.append('short_name', `${data.short_name}`);
      httpHeaders = httpHeaders.append('full_name', `${data.full_name}`);
      console.log('ubicacion headers: ', httpHeaders);
    } else if (tipo == 'P') {
      httpHeaders = httpHeaders.append('latitud', `${data.waypoints.location.lat}`);
      httpHeaders = httpHeaders.append('longitud', `${data.waypoints.location.lng}`);
      httpHeaders = httpHeaders.append('short_name', `${data.mainName}`);
      httpHeaders = httpHeaders.append('full_name', `${data.nombreExtenso}`);
      httpHeaders = httpHeaders.append('place_id', `${data.placeid}`);
      console.log('places headers: ', httpHeaders);
    } else {

      if (data.codigo_geo == null || undefined) {
        httpHeaders = httpHeaders.append('latitud', `${data.lat}`);
        httpHeaders = httpHeaders.append('longitud', `${data.lng}`);
        httpHeaders = httpHeaders.append('short_name', `${data.short_name}`);
        httpHeaders = httpHeaders.append('full_name', `${data.showfull_name}`);
      } else
        httpHeaders = httpHeaders.append('codigo_geo', `${data.codigo_geo}`);
      console.log('origen destino headers: ', httpHeaders);
    }

    return this.makeRequestPut(url, httpHeaders);
  }


  //GET VIAJES PUBLICADOS
  public getViajesPublicados(): Observable<any> {
    // let url = this.rutaBasePathUser + `viajespublicados?cedula=${this.myservices.usuarioCedula}`;
    let url = 'viajespublicados';
    let httpHeaders = new HttpHeaders().set('cedula', `${this.myservices.usuarioCedula}`);
    return this.makeRequestGet(url, httpHeaders);
  }


  //ELIMINAR VIAJES PUBLICADOS

  public deleteViajesPublicados(codigo_viaje: number): Observable<any> {
    // let url = this.rutaBasePathUser + `publicacion?codigo_viaje=${codigo_viaje}`;
    let url = 'publicacion';
    let httpHeaders = new HttpHeaders().set('codigo_viaje', `${codigo_viaje}`);
    return this.makeRequestDelete(url, httpHeaders);
  }

  //GET VIAJES DIARIOS

  public getViajesDiarios(): Observable<any> {
    let url = 'viajesdiarios';
    return this.makeRequestGet(url);
  }

  //RESERVA VIAJES 

  public reservaViaje(codigo_viaje: number): Observable<any> {
    // let url = this.rutaBasePathUser + `reserva?codigo_viaje=${codigo_viaje}&cedula=${this.myservices.usuarioCedula}`;
    let url = 'reserva';
    let httpHeaders = new HttpHeaders().set('codigo_viaje', `${codigo_viaje}`);
    httpHeaders = httpHeaders.append('cedula', `${this.myservices.usuarioCedula}`);
    return this.makeRequestPost(url, httpHeaders);
  }

  //GET VIAJES RESERVADOS
  public getViajesReservados(): Observable<any> {
    // let url = this.rutaBasePathUser + `reserva?cedula=${this.myservices.usuarioCedula}`;
    let url = 'reserva';
    let httpHeaders = new HttpHeaders().set('cedula', `${this.myservices.usuarioCedula}`);
    return this.makeRequestGet(url, httpHeaders);
  }

  //CANCEL RESERVA DE VIAJES

  public cancelViajesReservados(codigo_viaje: number, codigo_reserva: number): Observable<any> {
    // let url = this.rutaBasePathUser + `reserva?codigo_viaje=${codigo_viaje}&codigo_reserva=${codigo_reserva}`;
    let url = 'reserva';
    let httpHeaders = new HttpHeaders().set('codigo_viaje', `${codigo_viaje}`);
    httpHeaders = httpHeaders.append('codigo_reserva', `${codigo_reserva}`);
    return this.makeRequestDelete(url, httpHeaders);
  }

  //LOGIN

  public getLogin(data: any): Observable<any> {
    let url = `login?id=${data.username}&pw=${data.password}`;
    return this.makeRequestGetAlterno(url);
  }


  //DEPENDECIAS

  public getDependencias(otherPerson?: string): Observable<any> {
    let url;
    if (otherPerson != null || undefined)
      url = `get_info_persona/${otherPerson}`;
    else
      url = `get_info_persona/${this.myservices.usuarioCedula}`;
    return this.makeRequestGetAlterno(url);
  }

  //get solictudes
  public getSolcitudesPasajeros(codigo_viaje: number): Observable<any> {
    // let url = this.rutaBasePathUser + `reserva?cedula=${this.myservices.usuarioCedula}`;
    let url = `solicitud?cedula=${this.myservices.usuarioCedula}&cod_viaje=${codigo_viaje}`;
    return this.makeRequestGet(url);
  }



  // //GET VIAJES PUBLICADOS DETALLES
  // public getViajesPublicadosDeatlles(codigo_viaje: number): Observable<any> {
  //   let url = this.rutaBasePathUser + `viajespublicados?codigo_viaje=${codigo_viaje}`;
  //   return this.makeRequestPost(url);
  // }









  private makeRequestPost(url: string, header?: HttpHeaders, body?) {
    if (header != null || undefined)
      return this.http.post(this.mainBasePath + url, body, { headers: header, responseType: 'json' });
    else
      return this.http.post(this.mainBasePath + url, body, { responseType: 'json' });
  }

  private makeRequestGet(url: string, header?: HttpHeaders) {
    if (header != null || undefined)
      return this.http.get(this.mainBasePath + url, { headers: header, responseType: 'json' });
    else
      return this.http.get(this.mainBasePath + url, { responseType: 'json' });
  }

  private makeRequestGetAlterno(url: string) {
    return this.http.get(this.mainBasePathAlt + url, { responseType: 'json' });
  }

  private makeRequestDelete(url: string, header?: HttpHeaders) {
    if (header != null || undefined)
      return this.http.delete(this.mainBasePath + url, { headers: header, responseType: 'json' });
    else
      return this.http.delete(this.mainBasePath + url, { responseType: 'json' });
  }

  private makeRequestPut(url: string, header?: HttpHeaders, body?) {
    // if (header){
    // return this.http.put(this.mainBasePath + url, body, { headers: this.headersHttp(), responseType: 'json' });
    if (header != null || undefined)
      return this.http.put(this.mainBasePath + url, body, { headers: header, responseType: 'json' });
    else
      return this.http.put(this.mainBasePath + url, body, { responseType: 'json' });
    // }else
    //   return this.http.put(this.mainBasePath + url, body, { responseType: 'json' });
  }

  // private headersHttp() {
  //   const httpHeaders = new HttpHeaders();
  //   httpHeaders.set('Content-Type', 'application/json');
  //   return httpHeaders;
  // }







}//end class
