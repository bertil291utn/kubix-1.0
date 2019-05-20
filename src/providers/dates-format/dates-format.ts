import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BrowserDomAdapter } from '@angular/platform-browser/src/browser/browser_adapter';

@Injectable()
export class DatesFormatProvider {

  constructor() {
    console.log('Hello DatesFormatProvider Provider');
  }

  actionGetMonth(month) {
    let month_string="";
    switch (month) {
      case 1: {
        month_string = "ene.";
        break;
      }
      case 2: {
        month_string = "feb.";
        break;
      }
      case 3: {
        month_string = "mar.";
        break;
      }
      case 4: {
        month_string = "abr.";
        break;
      }
      case 5: {
        month_string = "may.";
        break;
      }
      case 6: {
        month_string = "jun.";
        break;
      }
      case 7: {
        month_string = "jul.";
        break;
      }
      case 8: {
        month_string = "ago.";
        break;
      }
      case 9: {
        month_string = "sept.";
        break;
      }
      case 10: {
        month_string = "oct.";
        break;
      }
      case 11: {
        month_string = "nov.";
        break;
      }
      case 12: {
        month_string = "dic.";
        break;
      }
    }
    return month_string;

  }

  actionGetDay(day) {
    let day_string="";
    switch (day) {
      case 1: {
        day_string = "Lunes";
        break;
      }
      case 2: {
        day_string = "Martes";
        break;
      }
      case 3: {
        day_string = "Miercoles";
        break;
      }
      case 4: {
        day_string = "Jueves";
        break;
      }
      case 5: {
        day_string = "Viernes";
        break;
      }
      case 6: {
        day_string = "sabado";
        break;
      }
      case 7: {
        day_string = "domingo";
        break;
      }
      
    }
    return day_string;

  }

}
