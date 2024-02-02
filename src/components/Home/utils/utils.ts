import L from "leaflet";
import IconMarker from "../../../assets/images/Map/MapIconMarker.png";

export const CustomMarkerIcon = (number: number) => {
  return new L.DivIcon({
    className: "custom-marker-icon",
    iconSize: [50, 55],
    html: `<div class="icon-marker">
             <img src="${IconMarker}" alt="Marker" style="width: 100%; height: 100%; padding: px"/>
            <div class="number-overlay">${number}</div>
          </div>`,
  });
};

const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoiZHVqbWExNjA4IiwiYSI6ImNscnlxZTRvMzFtaHYyaW11ZDQ1cTRhczYifQ.NNWHqyeKHUH06Pw4-EegTQ";

const MAPBOX_STYLE_URL = "mapbox://styles/dujma1608/clrz01dqd00vk01qy2hmp8dhw";

export const markers: MyMarker[] = [
  {
    geoCode: [45.78345, 15.915418],
    popUp: "Hello, I am pop up 1",
    connectorsNumber: 40,
  },
  {
    geoCode: [45.778, 15.9151],
    popUp: "Hello, I am pop up 2",
    connectorsNumber: 5,
  },
  {
    geoCode: [45.781, 15.9193],
    popUp: "Hello, I am pop up 3",
    connectorsNumber: 2,
  },
  {
    geoCode: [45.796, 15.9893],
    popUp: "Hello, I am pop up 4",
    connectorsNumber: 3,
  },
  {
    geoCode: [45.806, 15.9893],
    popUp: "Hello, I am pop up 5",
    connectorsNumber: 6,
  },
  {
    geoCode: [45.806, 15.9693],
    popUp: "Hello, I am pop up 6",
    connectorsNumber: 4,
  },
  {
    geoCode: [45.801, 15.9793],
    popUp: "Hello, I am pop up 7",
    connectorsNumber: 4,
  },
  {
    geoCode: [45.806, 15.9653],
    popUp: "Hello, I am pop up 8",
    connectorsNumber: 3,
  },
  {
    geoCode: [45.771, 16.043],
    popUp: "Hello, I am pop up 9",
    connectorsNumber: 8,
  },
  {
    geoCode: [45.856, 15.9843],
    popUp: "Hello, I am pop up 10",
    connectorsNumber: 6,
  },
  {
    geoCode: [45.806, 15.9993],
    popUp: "Hello, I am pop up 11",
    connectorsNumber: 6,
  },
  {
    geoCode: [45.826, 15.9593],
    popUp: "Hello, I am pop up 12",
    connectorsNumber: 4,
  },
  {
    geoCode: [45.811, 16.0793],
    popUp: "Hello, I am pop up 13",
    connectorsNumber: 4,
  },
  {
    geoCode: [45.816, 16.0653],
    popUp: "Hello, I am pop up 14",
    connectorsNumber: 3,
  },
];

export interface MyMarker {
  geoCode: [number, number];
  popUp: string;
  connectorsNumber: number;
}

export const MAP_URL = `https://api.mapbox.com/styles/v1/dujma1608/clrz01dqd00vk01qy2hmp8dhw/tiles/{z}/{x}/{y}?access_token=${MAPBOX_ACCESS_TOKEN}`;
