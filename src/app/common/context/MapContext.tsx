// import React, { createContext, useContext, useState } from "react";

// // Create the context
// const MapContext = createContext<{ centerMap: () => void } | undefined>(
//   undefined
// );

// // Create the context provider
// export const MapProvider: React.FC = ({ children }) => {
//   const [currentLocation, setCurrentLocation] = useState<
//     [number, number] | null
//   >(null);

//   // Function to set the map center
//   const centerMap = () => {
//     // Logic to center the map goes here
//     // For demonstration purposes, let's just log a message
//     console.log("Centering map...");
//   };

//   return (
//     <MapContext.Provider value={{ centerMap }}>{children}</MapContext.Provider>
//   );
// };

// // Custom hook to access the centerMap function
// export const useMap = () => {
//   const context = useContext(MapContext);
//   if (!context) {
//     throw new Error("useMap must be used within a MapProvider");
//   }
//   return context;
// };
