// wwwroot/map.js

window.initializeLeafletMap = () => {
  // const map = L.map("map").setView([51.505, -0.09], 13); // London coordinates

  // Load Leaflet.js map *****************************************
  const corner1 = L.latLng(-90, -180);
  const corner2 = L.latLng(90, 180);
  const bounds = L.latLngBounds(corner1, corner2);

  // define Leaflet js map - provide default location to position the map at with setView
  const map = L.map("map", {
    minZoom: 3,
    maxBounds: bounds,
    maxBoundsViscosity: 0.8,
    inertia: true,
  }).setView([53.55, -1.48], 12);

  // Add OpenStreetMap tiles
  // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //     attribution: '© OpenStreetMap contributors'
  // }).addTo(map);

  // Street
  googleStreet = L.tileLayer(
    "http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}",
    {
      maxZoom: 20,
      subdomains: ["mt0", "mt1", "mt2", "mt3"],
      attribution: "Google Streets",
      noWrap: true,
    }
  );

  googleStreet.addTo(map);

  // // Add a marker
  // L.marker([51.505, -0.09]).addTo(map).bindPopup("You are here!").openPopup();
};
