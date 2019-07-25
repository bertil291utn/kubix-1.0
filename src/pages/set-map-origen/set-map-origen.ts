import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ViewController, App } from 'ionic-angular';
import { GoogleMap, Marker, GoogleMapOptions, GoogleMaps, GoogleMapsEvent } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder';
import { HomeCViewRutaPage } from '../home-c-view-ruta/home-c-view-ruta';
import { RutaProvider } from '../../providers/ruta/ruta';
import { EnvironmentVarService } from '../../providers/environmentVarService/environmentVarService';
import { RestApiServiceProvider } from '../../providers/rest-api-service/rest-api-service';

declare var google;
declare var html2canvas;
@Component({
  selector: 'page-set-map-origen',
  templateUrl: 'set-map-origen.html',
})
export class SetMapOrigenPage {
  @ViewChild('map_canvas22') mapElement: ElementRef;
  public direccion;
  public map: GoogleMap;
  varLatLng;

  ubicacion: boolean;
  varInterval;
  loadingControllerSave;

  setMapObject = { codigo_geo: null, lat: null, lng: null, short_name: null, full_name: null, showfull_name: null };

  constructor(private geolocation: Geolocation, public myservices: EnvironmentVarService,
    public loadingCtrl: LoadingController, public apiRestService: RestApiServiceProvider,
    public nav: NavController, public navParams: NavParams, public viewCtrl: ViewController,
    public routeCreate: RutaProvider, public appCtrl: App) {

    this.ubicacion = navParams.get('ubicacion');
  }

  ionViewDidLoad() {
    this.loadMapa();
    this.reverse_geo_application();
    this.ActionGetLocation();
  }

  ionViewDidEnter() {
    this.varInterval = setInterval(() => {
      this.direccion;
      this.varLatLng;
    }, 1000);
  }

  ionViewDidLeave() {
    //pararla funcion de busqueda el momento que haya dejado el page
    clearInterval(this.varInterval);
  }

  // ionViewWillLeave() {
  //   const nodeList = document.querySelectorAll('._gmaps_cdv_');
  //   for (let k = 0; k < nodeList.length; ++k) {
  //     nodeList.item(k).classList.remove('_gmaps_cdv_');
  //   }
  // }


  async loadMapa() {
    const myLatLng = await this.getLocation();
    const loading = this.loadingCtrl.create();
    loading.present();
    let styles = [
      {
        "stylers": [
          {
            "hue": "#e7ecf0"
          }
        ]
      },
      {
        "featureType": "poi.business",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi.government",
        "stylers": [
          {
            "color": "#ffff80"
          }
        ]
      },
      {
        "featureType": "poi.medical",
        "stylers": [
          {
            "color": "#80c2ff"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "stylers": [
          {
            "color": "#75e159"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi.school",
        "stylers": [
          {
            "color": "#ffff80"
          }
        ]
      },
      {
        "featureType": "road",
        "stylers": [
          {
            "saturation": -70
          }
        ]
      },
      {
        "featureType": "water",
        "stylers": [
          {
            "saturation": -60
          },
          {
            "visibility": "simplified"
          }
        ]
      }
    ];
    let myMapType: string;
    let zoom: number;

    if (this.ubicacion) {
      myMapType = 'hybrid';
      zoom = 18;
    } else {
      myMapType = 'roadmap';
      zoom = 15;
    }

    let mapOptions = {
      center: { lat: myLatLng.lat, lng: myLatLng.lng },
      zoom: zoom,
      disableDefaultUI: true,
      styles: styles,
      mapTypeId: myMapType
    };


    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      // do something only the first time the map is loaded
      loading.dismiss();
      this.camera_position(this.map);
    });


    // const loading = this.loadingCtrl.create();
    // loading.present();
    // const myLatLng = await this.getLocation();
    // let myMapType: string;
    // let zoom: number;
    // if (this.ubicacion) {
    //   myMapType = 'MAP_TYPE_HYBRID';
    //   zoom = 18;
    // } else {
    //   myMapType = 'MAP_TYPE_ROADMAP';
    //   zoom = 15;
    // }

    // 
    // let mapOptions: GoogleMapOptions = {
    //   camera: {
    //     target: {
    //       lat: myLatLng.lat,
    //       lng: myLatLng.lng
    //     },
    //     zoom: zoom
    //   },
    //   mapType: myMapType,
    //   styles: styles
    // };

    // //this.map = GoogleMaps.create('map_canvas22', mapOptions);



    // this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
    //   loading.dismiss();
    //   this.camera_position();
    // });


  }


  private async getLocation() {
    const rta = await this.geolocation.getCurrentPosition();
    return {
      lat: rta.coords.latitude,
      lng: rta.coords.longitude
    };
  }

  camera_position(map) {

    google.maps.event.addListener(map, 'center_changed', () => {
      // console.log('latitud: ', map.getCenter().lat());
      // console.log('longitud: ', map.getCenter().lng());
      let latlng = {
        lat: map.getCenter().lat(),
        lng: map.getCenter().lng()
      };
      this.geoDecoder(latlng);
      this.varLatLng = latlng;
      this.setMapObject.lat = this.varLatLng.lat;
      this.setMapObject.lng = this.varLatLng.lng;

    });
    // this.map.on(GoogleMapsEvent.CAMERA_MOVE_END).subscribe((val) => {
    //   let target = val[0].target;
    //   let latlng = {
    //     lat: target.lat,
    //     lng: target.lng
    //   };
    //   this.geoDecoder(latlng);
    //   this.varLatLng = latlng;
    //   this.setMapObject.lat = this.varLatLng.lat;
    //   this.setMapObject.lng = this.varLatLng.lng;
    // });
  }

  geoDecoder(latlng) {
    //geodecorder javascript api 
    let geocoder = new google.maps.Geocoder;
    geocoder.geocode({ 'location': latlng }
      , (results, status) => {
        if (status === 'OK') {
          if (results[0]) {
            this.direccion = results[0].formatted_address;
            this.setMapObject.short_name = this.myservices.removeaccents(this.getShortName(results[0]));
            this.setMapObject.full_name = this.myservices.removeaccents(this.direccion);
            this.setMapObject.showfull_name = this.myservices.removeaccents(this.direccion);
            console.log('object setmap inicial: ', this.setMapObject);
            //console.log('full results: ', results);
          }
        }
      });
  }


  private getShortName(results: any) {
    let resultsLength = results.address_components.length;

    if (resultsLength >= 6)
      return results.address_components[3].short_name;
    else if (resultsLength == 4 || resultsLength == 5)
      return results.address_components[1].short_name;
    else if (resultsLength == 2 || resultsLength == 3)
      return results.address_components[0].short_name;
    else if (resultsLength == 1) {
      let direccion = results.formatted_address.split(',');
      return direccion[0];
    }
  }

  async reverse_geo_application() {
    this.loadingControllerSave = this.loadingCtrl.create();
    this.loadingControllerSave.present();
    this.geoDecoder(await this.getLocation());

  }

  async ActionGetLocation() {
    this.varLatLng = await this.getLocation();
    if (this.varLatLng != null || undefined) {
      this.setMapObject.lat = this.varLatLng.lat;
      this.setMapObject.lng = this.varLatLng.lng;
      this.loadingControllerSave.dismiss();
    }
  }

  saveValues() {
    const loading = this.loadingCtrl.create();
    loading.present();

    if (!this.ubicacion) {
      if (this.myservices.setMap) {
        this.viewCtrl.dismiss();
        if (this.myservices.utnOrigen)
          this.routeCreate.destino = this.setMapObject;
        else
          this.routeCreate.origen = this.setMapObject;
        this.appCtrl.getRootNav().push(HomeCViewRutaPage)
      } else
        this.returnValues();
      loading.dismiss();
    }

    //this ubicacion viene cunado el conductor establece punto de encuentro viaje-conductor page 
    if (this.ubicacion) {
      let elem = document.getElementById('map_canvas22');
      html2canvas(elem, {
        optimized: false,
        allowTaint: false,
        useCORS: true,
        onrendered: (canvas) => {
          canvas.toBlob((blob) => {
            this.routeCreate.adicional.foto_ubicacion = blob;
            let data = { ubicacionObject: this.setMapObject };
            if (blob != null || undefined)
              loading.dismiss();
            this.viewCtrl.dismiss(data);
          })
        }
      })

    }

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  returnValues() {
    //casa verdadero para que el template se visualice en viaje-origen page
    //guardar en casa
    console.log('casaobject para guardar: ', this.setMapObject);
    this.apiRestService.updateCasa(this.setMapObject).subscribe((resp) => {
      console.log('respuesta guardar casa: ', resp);
      this.viewCtrl.dismiss({ update: true });
    });
  }

}
