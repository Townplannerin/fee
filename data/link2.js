var map = L.map('map', {zoomSnap: 0, zoomDelta: 0.25}).setView([12.9912, 77.5999], 11);
var hash = new L.Hash(map);
var scale = L.control.scale();
         scale.addTo(map);
map.attributionControl.setPrefix('<a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>');                                                                                                          
var legend = L.control();
    legend.onAdd = function (map) {
        div = L.DomUtil.create( 'div', 'info legend' );
        div.innerHTML = '<h4><b>BANGALORE</b></h4>' +  ('Revised Master Plan 2015<br>Proposed Land Use Map');
        return div;
    };
    legend.addTo(map);
var north = L.control({position: "bottomleft"});
north.onAdd = function(map) {
    var div = L.DomUtil.create("div", "info legend");
    div.innerHTML = '<img src="css/images/NORTH.jpg">';
    return div;
}
north.addTo(map);
var osmGeocoder = new L.Control.Geocoder({
            collapsed: true,
            position: 'topright',
            text: 'Search',
            title: 'Testing'
        }).addTo(map);
        document.getElementsByClassName('leaflet-control-geocoder-icon')[0]
        .className += ' fa fa-search';
        document.getElementsByClassName('leaflet-control-geocoder-icon')[0]
        .title += 'Search for a place';
var measureControl = new L.Control.Measure({
            position: 'topleft',
            primaryLengthUnit: 'meters',
            secondaryLengthUnit: 'kilometers',
            primaryAreaUnit: 'sqmeters',
            secondaryAreaUnit: 'acres'
        });
        measureControl.addTo(map);
        document.getElementsByClassName('leaflet-control-measure-toggle')[0]
        .innerHTML = '';
        document.getElementsByClassName('leaflet-control-measure-toggle')[0]
        .className += ' fas fa-ruler';
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
var featuresLayer1 = new L.GeoJSON(Villages, {
            style: function(feature) {
                return {opacity: 1,
                color: 'rgba(255,234,1,1.0)',
                weight: 1,
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
var featuresLayer3 = new L.GeoJSON(pd, {
            style: function(feature) {
                return {opacity: 1,
                color: 'rgba(0,0,255,1.0)',
                weight: 1,
                fillColor: '#FFFFFF00',
                fillOpacity: 0,
                interactive: true,};
            },
            onEachFeature:popUp}
        );
var GoogleStreet =
          L.tileLayer('https://www.google.com/maps/vt?lyrs=m@189&gl=com&x={x}&y={y}&z={z}', {
            attribution: 'Map data &copy;2022 <a href="http://maps.google.com">Google</a> | Terms of Use',
            maxZoom: 21
          })
var GoogleSatellite =
          L.tileLayer('https://www.google.com/maps/vt?lyrs=s@189&gl=com&x={x}&y={y}&z={z}', {
            attribution: 'Map data &copy;2022 <a href="http://maps.google.com">Google</a> | Terms of Use',
            maxZoom: 21
          })
var GoogleHybrid =
          L.tileLayer('https://www.google.com/maps/vt?lyrs=s,h@189&gl=com&x={x}&y={y}&z={z}', {
            attribution: 'Map data &copy;2022 <a href="http://maps.google.com">Google</a> | Terms of Use',
            maxZoom: 21
          })
var OpenStreetMap =
          L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'Map data &copy;2022 OpenStreetMap | Terms of Use',
            maxZoom: 21
          })
map.addLayer(GoogleStreet);
var sslr = L.esri.tiledMapLayer({
            url: 'https://kgis.ksrsac.in/kgismaps2/rest/services/CadastralData_Admin/Cached_CadastralData_Admin/MapServer', maxZoom: 21})
var RMP2015 = L.tileLayer('data/geo/{z}/{x}/{y}.png', {
        transparent: true, opacity: 0.5, minZoom: 15, maxZoom: 20, tms: false, attribution: 'SaiKPrajwal <a target="_blank" href="data/lpa.html">LPA</a>'
      }).addTo(map);
var baseMaps = {'GoogleStreet': GoogleStreet,
                'GoogleSatellite': GoogleSatellite,
                'GoogleHybrid': GoogleHybrid,
               'OpenStreetMap': OpenStreetMap};
var overlayMaps = {'Cadastral': sslr, 'RMP2015': RMP2015,'Villages': featuresLayer1, 'Road': featuresLayer2, 'PlanningDistricts': featuresLayer3,};
var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);
var searchControl = new L.Control.Search({
        layer: featuresLayer1,
        propertyName: 'V_Nm',
        marker: false,
        moveToLocation: function(latlng, title, map) {
            var zoom = map.getBoundsZoom(latlng.layer.getBounds());
            map.setView(latlng, zoom);
        }
    }); 
 searchControl.on('search:locationfound', function(e) {
        e.layer.setStyle({color: 'rgba(255,0,204,1.0)' , weight: 6.0});
        if(e.layer._popup)
            e.layer.openPopup();
    }).on('search:collapsed', function(e) {
        featuresLayer1.eachLayer(function(layer) {   
            featuresLayer1.resetStyle(layer);
        }); 
    });
    map.addControl( searchControl );
var sidepanelRight = L.control.sidepanel('mySidepanelRight', {
            panelPosition: 'right',
            tabsPosition: 'top',
            pushControls: true,
        }).addTo(map);
var drawnItems = new L.FeatureGroup();
map.addLayer(drawnItems);
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
  drawnItems.addLayer(layer);
  layer.bindPopup(popupContent).openPopup();
});
L.control .opacity(overlayMaps, { label: 'Layer Opacity', collapsed: true }) .addTo(map);
