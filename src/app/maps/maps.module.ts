import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {MapsPageRoutingModule} from './maps-routing.module';

import {MapsPage} from './maps.page';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import {LeafletMarkerClusterModule} from "@asymmetrik/ngx-leaflet-markercluster";
import {NgxLeafletLocateModule} from "@runette/ngx-leaflet-locate";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeafletModule,
    MapsPageRoutingModule,
    LeafletMarkerClusterModule,
    NgxLeafletLocateModule

  ],
  declarations: [MapsPage]
})
export class MapsPageModule {
}
