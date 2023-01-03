import { Component, OnInit } from '@angular/core';
import {LatLngExpression, Map as LMap, TileLayer} from 'leaflet';


@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {

  // @ts-ignore
  public map: LMap;
  public center: LatLngExpression = [
    -28.690259,
    131.5190514,
  ];

  public options = {
    zoom: 5,
    maxZoom: 18,
    zoomControl: false,
    preferCanvas: true,
    attributionControl: true,
    center: this.center,
    layers: [
      new TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
    ],
  };

  constructor() { }

  public async onMapReady(lMap: LMap) {
    this.map = lMap;
    setTimeout(() => lMap.invalidateSize(true), 0);
  }

  ngOnInit() {
  }



}
