var map = L.map("map").setView([12.9801708, 77.5730896], 10);
var legend = L.control();
	legend.onAdd = function (map) {
		div = L.DomUtil.create( 'div', 'info legend' );
		div.innerHTML = '<h4><b>Sample</b></h4>' +  ('Touch to get attribute');
		return div;
	};
	legend.addTo(map);
	var GoogleStreet =
          L.tileLayer('http://www.google.com/maps/vt?lyrs=m@189&gl=com&x={x}&y={y}&z={z}', {
            attribution: 'Map data &copy;2019 <a href="http://maps.google.com">Google</a> | Terms of Use',
            maxZoom: 21
          })
        var GoogleSatellite =
          L.tileLayer('http://www.google.com/maps/vt?lyrs=s@189&gl=com&x={x}&y={y}&z={z}', {
            attribution: 'Map data &copy;2019 <a href="http://maps.google.com">Google</a> | Terms of Use',
            maxZoom: 21
          })
        var GoogleHybrid =
          L.tileLayer('http://www.google.com/maps/vt?lyrs=s,h@189&gl=com&x={x}&y={y}&z={z}', {
            attribution: 'Map data &copy;2019 <a href="http://maps.google.com">Google</a> | Terms of Use',
            maxZoom: 21
          })
        map.addLayer(GoogleStreet);
  var sslr = L.esri.tiledMapLayer({
  url: 'https://kgis.ksrsac.in/kgismaps1/rest/services/CadastralData_Admin/Cached_CadastralData_Admin/MapServer'
}).addTo(map);
map.attributionControl.setPrefix('');
var geojsonLayer = L.geoJSON(road);
geojsonLayer.addTo(map);
var baseMaps = {'GoogleStreet': GoogleStreet,
            'GoogleSatellite': GoogleSatellite,
            'GoogleHybrid': GoogleHybrid
        };
        L.control.layers(baseMaps,{'Cadastral': sslr,},{collapsed:true}).addTo(map);
var hash = new L.Hash(map);
var scale = L.control.scale();
         scale.addTo(map);