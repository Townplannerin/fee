function myFunction() {
var map = L.map("map").setView([12.9801708, 77.5730896], 10);

var legend = L.control();
	legend.onAdd = function (map) {
		div = L.DomUtil.create( 'div', 'info legend' );
		div.innerHTML = '<h4><b>Site Visit</b></h4>' +  ('Draw');
		return div;
	};
	legend.addTo(map);

var scale = L.control.scale();
         scale.addTo(map);

var GoogleStreet =
          L.tileLayer('http://www.google.com/maps/vt?lyrs=m@189&gl=com&x={x}&y={y}&z={z}', {
            attribution: 'Map data &copy;2021 <a href="http://maps.google.com">Google</a> | Terms of Use',
            maxZoom: 21
          })
var GoogleSatellite =
          L.tileLayer('http://www.google.com/maps/vt?lyrs=s@189&gl=com&x={x}&y={y}&z={z}', {
            attribution: 'Map data &copy;2021 <a href="http://maps.google.com">Google</a> | Terms of Use',
            maxZoom: 21
          })
var GoogleHybrid =
          L.tileLayer('http://www.google.com/maps/vt?lyrs=s,h@189&gl=com&x={x}&y={y}&z={z}', {
            attribution: 'Map data &copy;2021 <a href="http://maps.google.com">Google</a> | Terms of Use',
            maxZoom: 21
          })
var OpenStreetMap =
          L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'Map data &copy;2021 OpenStreetMap | Terms of Use',
            maxZoom: 21
          })
map.addLayer(GoogleStreet);

var sslr = L.esri.tiledMapLayer({
url: ''
}).addTo(map);

map.attributionControl.setPrefix('');

var baseMaps = {'GoogleStreet': GoogleStreet,
            'GoogleSatellite': GoogleSatellite,
            'GoogleHybrid': GoogleHybrid,
	'OpenStreetMap': OpenStreetMap
        };
L.control.layers(baseMaps,{'Cadastral': sslr,},{collapsed:true}).addTo(map);

var measureControl = new L.Control.Measure({
            primaryLengthUnit: 'meters',
            secondaryLengthUnit: 'kilometers',
            primaryAreaUnit: 'sqmeters',
            secondaryAreaUnit: 'acres'
        });
        measureControl.addTo(map);

var drawnItems = new L.FeatureGroup();
map.addLayer(drawnItems);

// Initialise the draw control and pass it the FeatureGroup of editable layers
var drawControl = new L.Control.Draw({
  edit: {
    featureGroup: drawnItems
  }
});
map.addControl(drawControl);

map.on('draw:created', function(e) {
  var layer = e.layer,
  		popupContent = layer.toGeoJSON ?
      	JSON.stringify(layer.toGeoJSON()) : "(no data)";

  // Do whatever else you need to. (save to db, add to map etc)
  drawnItems.addLayer(layer);
  
  layer.bindPopup(popupContent).openPopup();
});

var hash = new L.Hash(map);

var geojsonLayer = L.geoJSON(road);
geojsonLayer.addTo(map);

var c = new L.Control.Coordinates();
    c.addTo(map);

    function onMapClick(e) {
      c.setCoordinates(e);
    }

    map.on('click', onMapClick);
}
