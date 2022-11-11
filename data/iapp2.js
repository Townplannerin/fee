var map = L.map('map', {
            zoomControl:true, maxZoom:21, minZoom:1
        })
        var hash = new L.Hash(map);
	var scale = L.control.scale();
         scale.addTo(map);
        map.attributionControl.setPrefix('<a href="https://github.com/tomchadwin/qgis2web" target="_blank">qgis2web</a> &middot; <a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> &middot; <a href="https://qgis.org">QGIS</a>');
        
        var measureControl = new L.Control.Measure({
            position: 'topright',
            primaryLengthUnit: 'meters',
            secondaryLengthUnit: 'kilometers',
            primaryAreaUnit: 'sqmeters',
            secondaryAreaUnit: 'hectares'
        });
        measureControl.addTo(map);

        document.getElementsByClassName('leaflet-control-measure-toggle')[0]
        .innerHTML = '';
        document.getElementsByClassName('leaflet-control-measure-toggle')[0]
        .className += ' fas fa-ruler';
        var bounds_group = new L.featureGroup([]);
        function setBounds() {
            if (bounds_group.getLayers().length) {
                map.fitBounds(bounds_group.getBounds());
            }
        }
        function pop_Hobli_0(feature, layer) {
            var popupContent = '<table>\
                    <tr>\
                        <th scope="row">Hobli</th>\
                        <td>' + (feature.properties['Hobli'] !== null ? Autolinker.link(String(feature.properties['Hobli'])) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent, {maxHeight: 400});
        }

        function style_Hobli_0_0() {
            return {
                pane: 'pane_Hobli_0',
                opacity: 1,
                color: 'rgba(255,1,230,1.0)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 2.0,
                fillOpacity: 0,
                interactive: true,
            }
        }
        map.createPane('pane_Hobli_0');
        map.getPane('pane_Hobli_0').style.zIndex = 400;
        map.getPane('pane_Hobli_0').style['mix-blend-mode'] = 'normal';
        var layer_Hobli_0 = new L.geoJson(json_Hobli_0, {
            attribution: '',
            interactive: true,
            dataVar: 'json_Hobli_0',
            layerName: 'layer_Hobli_0',
            pane: 'pane_Hobli_0',
            onEachFeature: pop_Hobli_0,
            style: style_Hobli_0_0,
        });
        bounds_group.addLayer(layer_Hobli_0);
        map.addLayer(layer_Hobli_0);
        function pop_Planning_districts_1(feature, layer) {
            var popupContent = '<table>\
                    <tr>\
                        <th scope="row">PD_No_Nm</th>\
                        <td>' + (feature.properties['PD_No_Nm'] !== null ? Autolinker.link(String(feature.properties['PD_No_Nm'])) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent, {maxHeight: 400});
        }

        function style_Planning_districts_1_0() {
            return {
                pane: 'pane_Planning_districts_1',
                opacity: 1,
                color: 'rgba(1,52,255,1.0)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 2.0,
                fillOpacity: 0,
                interactive: true,
            }
        }
        map.createPane('pane_Planning_districts_1');
        map.getPane('pane_Planning_districts_1').style.zIndex = 401;
        map.getPane('pane_Planning_districts_1').style['mix-blend-mode'] = 'normal';
        var layer_Planning_districts_1 = new L.geoJson(json_Planning_districts_1, {
            attribution: '',
            interactive: true,
            dataVar: 'json_Planning_districts_1',
            layerName: 'layer_Planning_districts_1',
            pane: 'pane_Planning_districts_1',
            onEachFeature: pop_Planning_districts_1,
            style: style_Planning_districts_1_0,
        });
        bounds_group.addLayer(layer_Planning_districts_1);
        map.addLayer(layer_Planning_districts_1);
        function pop_Villages_2(feature, layer) {
            var popupContent = '<table>\
                    <tr>\
                        <th scope="row">V_Nm</th>\
                        <td>' + (feature.properties['V_Nm'] !== null ? Autolinker.link(String(feature.properties['V_Nm'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">V_Is_BDA</th>\
                        <td>' + (feature.properties['V_Is_BDA'] !== null ? Autolinker.link(String(feature.properties['V_Is_BDA'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Hobli</th>\
                        <td>' + (feature.properties['Hobli'] !== null ? Autolinker.link(String(feature.properties['Hobli'])) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent, {maxHeight: 400});
        }

        function style_Villages_2_0() {
            return {
                pane: 'pane_Villages_2',
                opacity: 1,
                color: 'rgba(255,234,1,1.0)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 2.0,
                fillOpacity: 0,
                interactive: true,
            }
        }
        map.createPane('pane_Villages_2');
        map.getPane('pane_Villages_2').style.zIndex = 402;
        map.getPane('pane_Villages_2').style['mix-blend-mode'] = 'normal';
        var layer_Villages_2 = new L.geoJson(json_Villages_2, {
            attribution: '',
            interactive: true,
            dataVar: 'json_Villages_2',
            layerName: 'layer_Villages_2',
            pane: 'pane_Villages_2',
            onEachFeature: pop_Villages_2,
            style: style_Villages_2_0,
        });
        bounds_group.addLayer(layer_Villages_2);
        map.addLayer(layer_Villages_2);
        function pop_Road_3(feature, layer) {
        }

        function style_Road_3_0() {
            return {
                pane: 'pane_Road_3',
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'round',
                lineJoin: 'round',
                weight: 8.0,
                fillOpacity: 0,
                interactive: true,
            }
        }
        function style_Road_3_1() {
            return {
                pane: 'pane_Road_3',
                opacity: 1,
                color: 'rgba(255,96,17,1.0)',
                dashArray: '',
                lineCap: 'round',
                lineJoin: 'round',
                weight: 6.0,
                fillOpacity: 0,
                interactive: true,
            }
        }
        map.createPane('pane_Road_3');
        map.getPane('pane_Road_3').style.zIndex = 403;
        map.getPane('pane_Road_3').style['mix-blend-mode'] = 'normal';
        var layer_Road_3 = new L.geoJson.multiStyle(json_Road_3, {
            attribution: '',
            interactive: true,
            dataVar: 'json_Road_3',
            layerName: 'layer_Road_3',
            pane: 'pane_Road_3',
            onEachFeature: pop_Road_3,
            styles: [style_Road_3_0,style_Road_3_1,]
        });
        bounds_group.addLayer(layer_Road_3);
        map.addLayer(layer_Road_3);
        var osmGeocoder = new L.Control.Geocoder({
            collapsed: true,
            position: 'topleft',
            text: 'Search',
            title: 'Testing'
        }).addTo(map);
        document.getElementsByClassName('leaflet-control-geocoder-icon')[0]
        .className += ' fa fa-search';
        document.getElementsByClassName('leaflet-control-geocoder-icon')[0]
        .title += 'Search for a place';

	var GoogleStreet =
          L.tileLayer('https://www.google.com/maps/vt?lyrs=m@189&gl=com&x={x}&y={y}&z={z}', {
            attribution: 'Map data &copy;2021 <a href="http://maps.google.com">Google</a> | Terms of Use',
            maxZoom: 21
          })
        var GoogleSatellite =
          L.tileLayer('https://www.google.com/maps/vt?lyrs=s@189&gl=com&x={x}&y={y}&z={z}', {
            attribution: 'Map data &copy;2021 <a href="http://maps.google.com">Google</a> | Terms of Use',
            maxZoom: 21
          })
        var GoogleHybrid =
          L.tileLayer('https://www.google.com/maps/vt?lyrs=s,h@189&gl=com&x={x}&y={y}&z={z}', {
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
url: 'https://kgis.ksrsac.in/kgismaps2/rest/services/CadastralData_Admin/Cached_CadastralData_Admin/MapServer'
}).addTo(map);
map.attributionControl.setPrefix('');

var baseMaps = {'GoogleStreet': GoogleStreet,
            'GoogleSatellite': GoogleSatellite,
            'GoogleHybrid': GoogleHybrid,
	'OpenStreetMap': OpenStreetMap
        };       
        L.control.layers(baseMaps,{'<img src="legend/Road_3.png" /> Road': layer_Road_3,'<img src="legend/Villages_2.png" /> Villages': layer_Villages_2,'<img src="legend/Planning_districts_1.png" /> Planning_districts': layer_Planning_districts_1,'<img src="legend/Hobli_0.png" /> Hobli': layer_Hobli_0,'Cadastral': sslr,}).addTo(map);
        map.on("zoomend", function(){

                if (map.hasLayer(layer_Hobli_0)) {
                    if (map.getZoom() <= 10 && map.getZoom() >= 19) {
                        layer_Hobli_0.eachLayer(function (layer) {
                            layer.openTooltip();
                        });
                    } else {
                        layer_Hobli_0.eachLayer(function (layer) {
                            layer.closeTooltip();
                        });
                    }
                }
                if (map.hasLayer(layer_Planning_districts_1)) {
                    if (map.getZoom() <= 10 && map.getZoom() >= 19) {
                        layer_Planning_districts_1.eachLayer(function (layer) {
                            layer.openTooltip();
                        });
                    } else {
                        layer_Planning_districts_1.eachLayer(function (layer) {
                            layer.closeTooltip();
                        });
                    }
                }
                if (map.hasLayer(layer_Villages_2)) {
                    if (map.getZoom() <= 12 && map.getZoom() >= 19) {
                        layer_Villages_2.eachLayer(function (layer) {
                            layer.openTooltip();
                        });
                    } else {
                        layer_Villages_2.eachLayer(function (layer) {
                            layer.closeTooltip();
                        });
                    }
                }
        });
        setBounds();
        var i = 0;
        layer_Villages_2.eachLayer(function(layer) {
            var context = {
                feature: layer.feature,
                variables: {}
            };
            layer.bindTooltip((layer.feature.properties['V_Nm'] !== null?String('<div style="color: #000000; font-size: 10pt; font-family: \'MS Shell Dlg 2\', sans-serif;">' + layer.feature.properties['V_Nm']) + '</div>':''), {permanent: true, offset: [-0, -16], className: 'css_Villages_2'});
            labels.push(layer);
            totalMarkers += 1;
              layer.added = true;
              addLabel(layer, i);
              i++;
        });
                if (map.hasLayer(layer_Hobli_0)) {
                    if (map.getZoom() <= 10 && map.getZoom() >= 19) {
                        layer_Hobli_0.eachLayer(function (layer) {
                            layer.openTooltip();
                        });
                    } else {
                        layer_Hobli_0.eachLayer(function (layer) {
                            layer.closeTooltip();
                        });
                    }
                }
                if (map.hasLayer(layer_Planning_districts_1)) {
                    if (map.getZoom() <= 10 && map.getZoom() >= 19) {
                        layer_Planning_districts_1.eachLayer(function (layer) {
                            layer.openTooltip();
                        });
                    } else {
                        layer_Planning_districts_1.eachLayer(function (layer) {
                            layer.closeTooltip();
                        });
                    }
                }
                if (map.hasLayer(layer_Villages_2)) {
                    if (map.getZoom() <= 12 && map.getZoom() >= 19) {
                        layer_Villages_2.eachLayer(function (layer) {
                            layer.openTooltip();
                        });
                    } else {
                        layer_Villages_2.eachLayer(function (layer) {
                            layer.closeTooltip();
                        });
                    }
                }
        map.addControl(new L.Control.Search({
            layer: layer_Villages_2,
            initial: false,
            hideMarkerOnCollapse: true,
            propertyName: 'V_Nm'}));
        document.getElementsByClassName('search-button')[0].className +=
         ' fa fa-binoculars';
        resetLabels([layer_Hobli_0,layer_Planning_districts_1,layer_Villages_2]);
        map.on("zoomend", function(){
            resetLabels([layer_Hobli_0,layer_Planning_districts_1,layer_Villages_2]);
        });
        map.on("layeradd", function(){
            resetLabels([layer_Hobli_0,layer_Planning_districts_1,layer_Villages_2]);
        });
        map.on("layerremove", function(){
            resetLabels([layer_Hobli_0,layer_Planning_districts_1,layer_Villages_2]);
        });
var north = L.control({position: "bottomleft"});
north.onAdd = function(map) {
    var div = L.DomUtil.create("div", "info legend");
    div.innerHTML = '<img src="legend/NORTH.jpg">';
    return div;
}
north.addTo(map);
