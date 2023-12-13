var map = L.map("map").setView([12.9801708, 77.5730896], 10);
var legend = L.control();
  legend.onAdd = function (map) {
    div = L.DomUtil.create( 'div', 'info legend' );
    div.innerHTML = '<h4><b>Site Visit Now</b></h4>';
    return div;
  };
  legend.addTo(map);

var featuresLayer1 = new L.GeoJSON(Villages, {
            style: function(feature) {
                return {opacity: 1,
                color: 'rgba(93,63,211,1.0)',
                weight: 3,
                fillColor: '#FFFFFF00',
                fillOpacity: 0,
                interactive: true,};
            },
            onEachFeature:popUp}
        );
    map.addLayer(featuresLayer1);
var featuresLayer2 = new L.GeoJSON(road, {
            style: function(feature) {
                return {opacity: 1,
                color: 'rgba(255,96,17,1.0)',
                lineCap: 'round',
                lineJoin: 'round',
                weight: 6.0,
                fillOpacity: 0,
                interactive: true,};
            },
            }
        );
    map.addLayer(featuresLayer2);
var GoogleStreet =
          L.tileLayer('http://www.google.com/maps/vt?lyrs=m@189&gl=com&x={x}&y={y}&z={z}', {
            attribution: 'Map data &copy; 2021 <a href="http://maps.google.com">Google</a> | Terms of Use',
            maxZoom: 21
          })
var GoogleSatellite =
          L.tileLayer('http://www.google.com/maps/vt?lyrs=s@189&gl=com&x={x}&y={y}&z={z}', {
            attribution: 'Map data &copy; 2021 <a href="http://maps.google.com">Google</a> | Terms of Use',
            maxZoom: 21
          })
var GoogleHybrid =
          L.tileLayer('http://www.google.com/maps/vt?lyrs=s,h@189&gl=com&x={x}&y={y}&z={z}', {
            attribution: 'Map data &copy; 2021 <a href="http://maps.google.com">Google</a> | Terms of Use',
            maxZoom: 21
          })
var OpenStreetMap =
          L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'Map data &copy; 2021 OpenStreetMap | Terms of Use',
            maxZoom: 21
          })
map.addLayer(GoogleStreet);
var sslr = L.esri.tiledMapLayer({
url: 'https://kgis.ksrsac.in/kgismaps2/rest/services/CadastralData_Admin/Cached_HissaData_Admin/MapServer', maxZoom: 21}).addTo(map);
map.attributionControl.setPrefix('');
var baseMaps = {'GoogleStreet': GoogleStreet,
            'GoogleSatellite': GoogleSatellite,
            'GoogleHybrid': GoogleHybrid,
  'OpenStreetMap': OpenStreetMap
        };
L.control.layers(baseMaps,{'Cadastral': sslr,'Villages': featuresLayer1, 'Road': featuresLayer2,},{collapsed:true}).addTo(map);
var hash = new L.Hash(map);

L.control.locate({
    strings: {
        title: "Show me where I am"
    }
}).addTo(map);
function popUp(f,l){
    var out = [];
    if (f.properties){
        for(key in f.properties){
            out.push("<b>"+ key +"</b> : "+f.properties[key]);
        }
        l.bindPopup(out.join("<br />"));
    }
}
var c = new L.Control.Coordinates();
    c.addTo(map);

    function onMapClick(e) {
      c.setCoordinates(e);
    }
    map.on('click', onMapClick);
  $.get('https://docs.google.com/spreadsheets/d/e/2PACX-1vS6K7rjvrw45il9JXv_0YgKz8dk2a0pRQ-KGIJ2MEsXhgyMkEvK3G9AVERMMFr9FVku4fPE1GhnMqCV/pub?output=csv', function(csvString) {

    var data = Papa.parse(csvString, {header: true, dynamicTyping: true}).data;
   var markers = L.markerClusterGroup({maxClusterRadius: 40}); 
   for (var i in data) {
      var row = data[i];
popUpContent = (
'<strong>slno : </strong>' + row.slno + '<br/>' +
'<strong>Hobli : </strong>' + row.hobli + '<br/>' +
'<strong>Village : </strong>' + row.village + '<br/>' +
'<strong>Sy No : </strong>' + row.syno + '<br/>' +
'<strong>Status : </strong>' + row.status
);
markers.addLayer(L.marker([row.Lat, row.Lon], {icon: L.VectorMarkers.icon({icon: 'tag', prefix: 'fa'})}).bindPopup(popUpContent));
   }
   map.addLayer(markers);
   map.fitBounds(markers.getBounds());
  });
