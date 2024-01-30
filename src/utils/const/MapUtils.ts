const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoiZHVqbWExNjA4IiwiYSI6ImNscnlxZTRvMzFtaHYyaW11ZDQ1cTRhczYifQ.NNWHqyeKHUH06Pw4-EegTQ";

const MAPBOX_STYLE_URL = "mapbox://styles/dujma1608/clrz01dqd00vk01qy2hmp8dhw";

export const markers = [
  {
    geoCode: [45.78345, 15.915418],
    popUp: "Hello, I am pop up 1",
  },
  {
    geoCode: [45.778, 15.9151],
    popUp: "Hello, I am pop up 2",
  },
  {
    geoCode: [45.781, 15.9193],
    popUp: "Hello, I am pop up 3",
  },
];

export const MAP_URL = `https://api.mapbox.com/styles/v1/dujma1608/clrz01dqd00vk01qy2hmp8dhw/tiles/{z}/{x}/{y}?access_token=${MAPBOX_ACCESS_TOKEN}`;
