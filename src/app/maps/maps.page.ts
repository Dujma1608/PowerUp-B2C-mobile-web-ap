import {Component, OnInit} from '@angular/core';
import {
  Icon,
  icon,
  LatLngExpression,
  Map as LMap,
  divIcon,
  marker,
  MarkerClusterGroupOptions,
  TileLayer,
  point, Control
} from 'leaflet';
import {Geolocation} from '@capacitor/geolocation';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {


  // @ts-ignore
  public map: LMap;
  public center: LatLngExpression = [
    45.815399, 15.966568
  ];

  public toggleModal = ""

  public currentLocationLayer = marker([45.802852, 15.968718], {
    icon: icon({
      ...Icon.Default.prototype.options,
      iconUrl: 'assets/img/maps/map_marker.png',
      iconRetinaUrl: '',
      shadowUrl: '',
      iconSize: [35, 35]
    })
  })

  public markerClusterOptions: MarkerClusterGroupOptions = {
    iconCreateFunction: function (cluster) {
      console.log("lol");
      let markers = cluster.getAllChildMarkers();
      let html = '<div style="width: 3em;\n' +
        '    height: 3em;\n' +
        '    background: #0AB051;\n' +
        '    border: 2px solid #3ACE7A;\n' +
        '    border-radius: 50%;' +
        'display: flex;' +
        'justify-content: center;' +
        'align-items: center;' +
        'color: white;' +
        'font-family: Inter">' + markers.length + '</div>';
      return divIcon({html: html, className: 'mycluster', iconSize: point(32, 32)});
    },
    spiderfyOnMaxZoom: false,
    showCoverageOnHover: false,
    removeOutsideVisibleBounds: false,
    maxClusterRadius: 20,
  };

  mockMapData = [
    marker([45.802852, 15.968718], {
      icon: icon({
        ...Icon.Default.prototype.options,
        iconUrl: 'assets/img/maps/map_marker.png',
        iconRetinaUrl: '',
        shadowUrl: '',
        iconSize: [35, 35]
      })
    }),
    marker([45.801176, 15.969748], {
      icon: icon({
        ...Icon.Default.prototype.options,
        iconUrl: 'assets/img/maps/map_marker.png',
        iconRetinaUrl: '',
        shadowUrl: '',
        iconSize: [35, 35]
      })
    }),
    marker([45.802134, 15.974558], {
      icon: icon({
        ...Icon.Default.prototype.options,
        iconUrl: 'assets/img/maps/map_marker.png',
        iconRetinaUrl: '',
        shadowUrl: '',
        iconSize: [35, 35]
      })
    })
  ];

  public options = {
    zoom: 6,
    maxZoom: 18,
    zoomControl: false,
    preferCanvas: true,
    attributionControl: true,
    center: this.center,
    layers: [
      new TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
    ],
  };

  public locateOptions: Control.LocateOptions = {

    showCompass: false,

  };

  constructor() {
  }

  closeModal() {
    this.toggleModal = "none"
  }

  printCurrentPosition = async () => {
    const coordinates = await Geolocation.getCurrentPosition();

    console.log('Current position:', coordinates);
    let html = '<div class="currentLocationPin currentLocationPinCircle">'+'</div>';
    let currentLocationPin = divIcon({html: html, className: 'mycluster', iconSize: point(20, 20)});

    let watchId = await Geolocation.watchPosition(
      {
        enableHighAccuracy: true,
        maximumAge: 0
      },
      (data) => {
        try {
          console.log(data);
          // @ts-ignore
          this.currentLocationLayer = marker([data.coords.latitude, data.coords.longitude], {
            icon: currentLocationPin
          })
        } catch (e) {
        }

      }
    );
  };


  public async onMapReady(lMap: LMap) {
    this.map = lMap;
    setTimeout(() => lMap.invalidateSize(true), 1000);
    await this.printCurrentPosition()
  }

  ngOnInit() {
  }


}
