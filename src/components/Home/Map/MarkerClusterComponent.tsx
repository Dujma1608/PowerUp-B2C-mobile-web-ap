import L from "leaflet";
import { useEffect, useState } from "react";
import { useMap } from "react-leaflet";
import { MyMarker, markers } from "../../utils/utils";
import "leaflet.markercluster/dist/leaflet.markercluster";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import { CustomMarkerIcon } from "../../utils/utils";
import { CustomMarker, CustomMarkerOptions } from "./CustomMarkerClass";
import MarkerModal from "../MarkerModal/MarkerModal";
import ConfirmInfo from "../../Charging/ConfirmInfoModal/ConfirmInfo";

const MarkerClusterComponent: React.FC = () => {
  const map = useMap();
  const [selectedMarker, setSelectedMarker] = useState<MyMarker | null>(null);

  const mcg = L.markerClusterGroup({
    iconCreateFunction: (cluster) => {
      const sum = cluster.getAllChildMarkers().reduce((acc, marker) => {
        return (
          acc + (marker.options as CustomMarkerOptions).connectorsNumber! || 0
        );
      }, 0);

      return CustomMarkerIcon(sum);
    },
  });

  useEffect(() => {
    mcg.clearLayers();

    markers.forEach(({ geoCode, popUp, connectorsNumber }: MyMarker) => {
      const marker = new CustomMarker(new L.LatLng(geoCode[0], geoCode[1]), {
        icon: CustomMarkerIcon(connectorsNumber),
        connectorsNumber: connectorsNumber,
      })
        .bindPopup(popUp)
        .on("click", () => {
          // Set the selected marker when clicked
          setSelectedMarker({ geoCode, popUp, connectorsNumber });
        });

      mcg.addLayer(marker);
    });

    // Optionally center the map around the markers
    // map.fitBounds(mcg.getBounds());

    // Add the marker cluster group to the map
    map.addLayer(mcg);

    return () => {
      // Cleanup when component unmounts
      map.removeLayer(mcg);
    };
  }, [map, markers, mcg]);

  const closeMarkerModal = () => {
    setSelectedMarker(null);
  };

  return (
    <>
      {selectedMarker && <ConfirmInfo />}
      {/* {selectedMarker && <MarkerModal onClose={closeMarkerModal} />} */}
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
