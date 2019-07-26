import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationserviceProvider } from '../authenticationservice/authenticationservice';

@Injectable()
export class AuthguardProvider {

  constructor(public http: HttpClient,private authService: AuthenticationserviceProvider) {
    console.log('Hello AuthguardProvider Provider');
  }
     public initAppmodules() {

      this.authService.checkToken().then(()=> {
        let authenticated = this.authService.isAuthenticated()
        if (!authenticated) {
         //this.rootPage = SlidesPage;
        }
        console.log('Logged', authenticated)
      })
  
      return true
    }




}//end class
