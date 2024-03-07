import L from "leaflet";

export interface CustomMarkerOptions extends L.MarkerOptions {
  connectorsCount?: number;
}

export class CustomMarker extends L.Marker {
  options: CustomMarkerOptions;

  constructor(latlng: L.LatLngExpression, options?: CustomMarkerOptions) {
    super(latlng, options);
    this.options = { ...L.Marker.prototype.options, ...options };
  }
}
