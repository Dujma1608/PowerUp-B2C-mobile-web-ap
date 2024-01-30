// import React, { useEffect, useRef } from "react";
// import { Marker, Popup } from "react-leaflet";
// import L from "leaflet";

// const CustomMarkerCluster = ({ markers, map, zoomThreshold = 12 }) => {
//   const clusterRef = useRef(L.layerGroup());

//   useEffect(() => {
//     const updateCluster = () => {
//       const currentZoom = map.getZoom();
//       const shouldCluster = currentZoom < zoomThreshold;

//       if (shouldCluster) {
//         // Remove individual markers from the map
//         markers.forEach((marker) => {
//           map.removeLayer(marker);
//         });

//         // Add the cluster layer to the map
//         map.addLayer(clusterRef.current);
//       } else {
//         // Remove the cluster layer from the map
//         map.removeLayer(clusterRef.current);

//         // Add individual markers to the map
//         markers.forEach((marker) => {
//           map.addLayer(marker);
//         });
//       }
//     };

//     // Attach event listener to map zoom changes
//     map.on("zoomend", updateCluster);

//     // Initial setup
//     updateCluster();

//     // Cleanup on component unmount
//     return () => {
//       map.off("zoomend", updateCluster);
//     };
//   }, [map, markers, zoomThreshold]);

//   return <Marker position={[0, 0]} ref={clusterRef} />;
// };

// export default CustomMarkerCluster;
