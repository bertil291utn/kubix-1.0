import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class RestApiServiceProvider {
  basePath = 'http://192.168.64.166:8080/ords/appkubix';

  constructor(public http: HttpClient) {
    console.log('Hello RestApiServiceProvider Provider');
  }

  getUsuario(data: string): Observable<any> {
    let url = '/usuarios/usuarioinfo/' + data;
    return this.makeRequestGet(url);
  }





  private makeRequestPost(url: string, body?) {
    return this.http.post(this.basePath + url, body);
  }

  private makeRequestGet(url: string, body?) {
    return this.http.get(this.basePath + url, body);
  }

  private makeRequestPut(url: string, body?) {
    return this.http.put(this.basePath + url, body);
  }

}//end class
