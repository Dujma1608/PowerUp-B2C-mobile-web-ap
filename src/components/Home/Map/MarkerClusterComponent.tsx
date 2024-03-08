import L from "leaflet";
import { useEffect, useState } from "react";
import { useMap } from "react-leaflet";
import "leaflet.markercluster/dist/leaflet.markercluster";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import { CustomMarkerIcon } from "../../utils/utils";
import { CustomMarker, CustomMarkerOptions } from "./CustomMarkerClass";
import MarkerModal from "../MarkerModal/MarkerModal";
import ConfirmInfo from "../../Charging/ConfirmInfoModal/ConfirmInfo";
import { useStore } from "../../../app/stores/store";
import { Charger } from "../../../app/models/charger";
import { toJS } from "mobx";

interface Props {
  chargers: Charger[];
}
const MarkerClusterComponent: React.FC<Props> = ({ chargers }) => {
  const { chargerStore, connectorStore } = useStore();
  const { scannedConnector } = connectorStore;
  const map = useMap();
  const [selectedMarker, setSelectedMarker] = useState<Charger | null>(null);

  const mcg = L.markerClusterGroup({
    iconCreateFunction: (cluster) => {
      const sum = cluster.getAllChildMarkers().reduce((acc, marker) => {
        return (
          acc + (marker.options as CustomMarkerOptions).connectorsCount! || 0
        );
      }, 0);

      return CustomMarkerIcon(sum);
    },
  });

  useEffect(() => {
    // Clear existing layers
    mcg.clearLayers();

    if (chargers && chargers.length > 0) {
      // Iterate through chargers and create markers
      chargers.forEach((charger: Charger) => {
        const marker = new CustomMarker(
          new L.LatLng(charger.latitude, charger.longitude),
          {
            icon: CustomMarkerIcon(charger.connectorsCount),
            connectorsCount: charger.connectorsCount,
          }
        ).on("click", () => {
          setSelectedMarker(charger);
          console.log(toJS(charger));
        });

        mcg.addLayer(marker);
      });

      // Add marker cluster group to the map
      map.addLayer(mcg);
    }
  }, [chargers, map, setSelectedMarker]);

  const closeMarkerModal = () => {
    setSelectedMarker(null);
  };

  useEffect(() => {
    const scanProcess = () => {
      if (scannedConnector) {
        chargers.forEach((charger) => {
          if (scannedConnector.chargerAddress === charger.address) {
            console.log([charger.latitude, charger.longitude]);
            map.setView([charger.latitude - 0.0007, charger.longitude]);
            map.setZoom(18);
          }
        });
      }
    };
    scanProcess();
  }, [scannedConnector, chargers, map.setView]);

  return (
    <>
      {selectedMarker && (
        <MarkerModal charger={selectedMarker} onClose={closeMarkerModal} />
      )}
      <style>
        {`
          .leaflet-cluster-spiderfy {
            box-shadow: none !important;
          }
        `}
      </style>
    </>
  );
};

export default MarkerClusterComponent;
