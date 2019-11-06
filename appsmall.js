var map = L.map("map").setView([14.7286, 74.7086], 10);
var scale = L.control.scale();
         scale.addTo(map);
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
        map.addLayer(GoogleHybrid);
  var sslr = L.esri.tiledMapLayer({
  url: 'https://maps.ksrsac.in/maps/rest/services/Cadastral/CadastralCache_State/MapServer'
}).addTo(map);
map.attributionControl.setPrefix('');
var baseMaps = {'GoogleStreet': GoogleStreet,
            'GoogleSatellite': GoogleSatellite,
            'GoogleHybrid': GoogleHybrid
        };
        L.control.layers(baseMaps,{'Cadastral': sslr,},{collapsed:true}).addTo(map);
