var _0x2501f1=_0x5bb4;(function(_0x542914,_0x4b29fd){var _0x41d885=_0x5bb4,_0x25f28b=_0x542914();while(!![]){try{var _0x2c0cda=parseInt(_0x41d885(0x222))/0x1+parseInt(_0x41d885(0x204))/0x2*(-parseInt(_0x41d885(0x217))/0x3)+parseInt(_0x41d885(0x1fd))/0x4+parseInt(_0x41d885(0x1f4))/0x5+parseInt(_0x41d885(0x213))/0x6+parseInt(_0x41d885(0x210))/0x7*(parseInt(_0x41d885(0x20b))/0x8)+-parseInt(_0x41d885(0x1ed))/0x9;if(_0x2c0cda===_0x4b29fd)break;else _0x25f28b['push'](_0x25f28b['shift']());}catch(_0x5b7019){_0x25f28b['push'](_0x25f28b['shift']());}}}(_0x3b54,0x7b8fd));var map=L[_0x2501f1(0x1f8)]('map',{'zoomSnap':0x0,'zoomDelta':0.25})[_0x2501f1(0x1f2)]([12.9912,77.5999],0xb),hash=new L[(_0x2501f1(0x1f3))](map),scale=L[_0x2501f1(0x1ee)]['scale']();scale[_0x2501f1(0x1eb)](map),map[_0x2501f1(0x1e9)][_0x2501f1(0x1f6)]('<a\x20href=\x22https://leafletjs.com\x22\x20title=\x22A\x20JS\x20library\x20for\x20interactive\x20maps\x22>Leaflet</a>');var legend=L['control']();legend['onAdd']=function(_0x1f589a){var _0x27a273=_0x2501f1;return div=L[_0x27a273(0x200)][_0x27a273(0x1e1)](_0x27a273(0x1e6),_0x27a273(0x203)),div['innerHTML']=_0x27a273(0x202),div;},legend[_0x2501f1(0x1eb)](map);var north=L['control']({'position':_0x2501f1(0x201)});north['onAdd']=function(_0x387cad){var _0x184b59=_0x2501f1,_0x4f3e52=L[_0x184b59(0x200)][_0x184b59(0x1e1)](_0x184b59(0x1e6),_0x184b59(0x203));return _0x4f3e52[_0x184b59(0x1dd)]=_0x184b59(0x211),_0x4f3e52;},north[_0x2501f1(0x1eb)](map);var measureControl=new L[(_0x2501f1(0x1e5))][(_0x2501f1(0x21d))]({'position':'topleft','primaryLengthUnit':'meters','secondaryLengthUnit':_0x2501f1(0x209),'primaryAreaUnit':_0x2501f1(0x1f5),'secondaryAreaUnit':_0x2501f1(0x1fe)});function popUp(_0x5648be,_0x5c24d4){var _0xfa5c48=_0x2501f1,_0x43a2d7=[];if(_0x5648be[_0xfa5c48(0x21a)]){for(key in _0x5648be[_0xfa5c48(0x21a)])_0x43a2d7[_0xfa5c48(0x20e)](_0xfa5c48(0x218)+key+_0xfa5c48(0x1e8)+_0x5648be[_0xfa5c48(0x21a)][key]);_0x5c24d4[_0xfa5c48(0x20c)](_0x43a2d7[_0xfa5c48(0x212)](_0xfa5c48(0x1ef)));}}measureControl[_0x2501f1(0x1eb)](map),document['getElementsByClassName']('leaflet-control-measure-toggle')[0x0][_0x2501f1(0x1dd)]='',document[_0x2501f1(0x1ea)]('leaflet-control-measure-toggle')[0x0][_0x2501f1(0x1de)]+='\x20fas\x20fa-ruler';function _0x5bb4(_0x3af7a5,_0x131d86){var _0x3b5462=_0x3b54();return _0x5bb4=function(_0x5bb450,_0x1bc3e7){_0x5bb450=_0x5bb450-0x1dd;var _0x47e957=_0x3b5462[_0x5bb450];return _0x47e957;},_0x5bb4(_0x3af7a5,_0x131d86);}var featuresLayer1=new L[(_0x2501f1(0x1fb))](Villages,{'style':function(_0x301aa9){var _0x32eb50=_0x2501f1;return{'opacity':0x1,'color':'rgba(255,234,1,1.0)','weight':0x1,'fillColor':_0x32eb50(0x207),'fillOpacity':0x0,'interactive':!0x0};},'onEachFeature':popUp});map[_0x2501f1(0x215)](featuresLayer1);var featuresLayer2=new L['GeoJSON'](road,{'style':function(_0x36f5e4){var _0x564dad=_0x2501f1;return{'opacity':0x1,'color':_0x564dad(0x216),'lineCap':_0x564dad(0x214),'lineJoin':_0x564dad(0x214),'weight':0x6,'fillOpacity':0x0,'interactive':!0x0};}});map['addLayer'](featuresLayer2);var featuresLayer3=new L[(_0x2501f1(0x1fb))](pd,{'style':function(_0x4397c6){var _0x32a225=_0x2501f1;return{'opacity':0x1,'color':_0x32a225(0x1f0),'weight':0x1,'fillColor':_0x32a225(0x207),'fillOpacity':0x0,'interactive':!0x0};},'onEachFeature':popUp}),featuresLayer4=new L['GeoJSON'](bbmp,{'style':function(_0x573c78){var _0x3801ca=_0x2501f1;return{'opacity':0x1,'color':_0x3801ca(0x20f),'weight':0x1,'fillColor':_0x3801ca(0x207),'fillOpacity':0x0,'interactive':!0x0};},'onEachFeature':popUp}),GoogleStreet=L[_0x2501f1(0x1e4)]('https://www.google.com/maps/vt?lyrs=m@189&gl=com&x={x}&y={y}&z={z}',{'attribution':_0x2501f1(0x1f7),'maxZoom':0x15}),GoogleSatellite=L['tileLayer'](_0x2501f1(0x21b),{'attribution':'Map\x20data\x20&copy;2023\x20<a\x20href=\x22http://maps.google.com\x22>Google</a>\x20|\x20Terms\x20of\x20Use','maxZoom':0x15}),GoogleHybrid=L['tileLayer'](_0x2501f1(0x1fa),{'attribution':_0x2501f1(0x1f7),'maxZoom':0x15}),OpenStreetMap=L[_0x2501f1(0x1e4)]('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{'attribution':_0x2501f1(0x21c),'maxZoom':0x15});map['addLayer'](GoogleStreet);var sslr=L[_0x2501f1(0x1ec)][_0x2501f1(0x220)]({'url':_0x2501f1(0x219),'maxZoom':0x15}),RMP2015=L[_0x2501f1(0x1e4)](_0x2501f1(0x208),{'transparent':!0x0,'opacity':0.5,'minZoom':0xf,'maxZoom':0x14,'tms':!0x1,'attribution':_0x2501f1(0x1df)})[_0x2501f1(0x1eb)](map),baseMaps={'GoogleStreet':GoogleStreet,'GoogleSatellite':GoogleSatellite,'GoogleHybrid':GoogleHybrid,'OpenStreetMap':OpenStreetMap},overlayMaps={'Cadastral':sslr,'RMP2015':RMP2015,'Villages':featuresLayer1,'Road':featuresLayer2,'PlanningDistricts':featuresLayer3,'BbmpWardMap':featuresLayer4},layerControl=L[_0x2501f1(0x1ee)][_0x2501f1(0x205)](baseMaps,overlayMaps)[_0x2501f1(0x1eb)](map),searchControl=new L[(_0x2501f1(0x1e5))][(_0x2501f1(0x1f9))]({'layer':featuresLayer1,'propertyName':'V_Nm','marker':!0x1,'moveToLocation':function(_0x2953ed,_0x275297,_0x40142a){var _0x4bcdcd=_0x2501f1,_0xbdbfb8=_0x40142a[_0x4bcdcd(0x21e)](_0x2953ed[_0x4bcdcd(0x20a)][_0x4bcdcd(0x1f1)]());_0x40142a[_0x4bcdcd(0x1f2)](_0x2953ed,_0xbdbfb8);}});searchControl['on'](_0x2501f1(0x206),function(_0x2eed86){var _0x45be03=_0x2501f1;_0x2eed86[_0x45be03(0x20a)][_0x45be03(0x21f)]({'color':_0x45be03(0x1fc),'weight':0x6}),_0x2eed86[_0x45be03(0x20a)]['_popup']&&_0x2eed86[_0x45be03(0x20a)][_0x45be03(0x1ff)]();}),map[_0x2501f1(0x1e2)](searchControl);function _0x3b54(){var _0x11cda9=['innerHTML','className','SaiKPrajwal','mySidepanelRight','create','addControl','sidepanel','tileLayer','Control','div','top','</b>\x20:\x20','attributionControl','getElementsByClassName','addTo','esri','3566061BWOumh','control','<br\x20/>','rgba(0,0,255,1.0)','getBounds','setView','Hash','2377465xPMHJM','sqmeters','setPrefix','Map\x20data\x20&copy;2023\x20<a\x20href=\x22http://maps.google.com\x22>Google</a>\x20|\x20Terms\x20of\x20Use','map','Search','https://www.google.com/maps/vt?lyrs=s,h@189&gl=com&x={x}&y={y}&z={z}','GeoJSON','rgba(255,0,204,1.0)','973120qilPGM','acres','openPopup','DomUtil','bottomleft','<h4><b>BANGALORE</b></h4>Revised\x20Master\x20Plan\x202015<br>Proposed\x20Land\x20Use\x20Map','info\x20legend','586VnDbkl','layers','search:locationfound','#FFFFFF00','data/geo/{z}/{x}/{y}.png','kilometers','layer','94024bDETiy','bindPopup','Layer\x20Opacity','push','rgba(255,0,255,1.0)','469iolrJu','<img\x20src=\x22css/images/NORTH.jpg\x22>','join','220464gcFapo','round','addLayer','rgba(255,96,17,1.0)','8307qxRhGY','<b>','','properties','https://www.google.com/maps/vt?lyrs=s@189&gl=com&x={x}&y={y}&z={z}','Map\x20data\x20&copy;2023\x20OpenStreetMap\x20|\x20Terms\x20of\x20Use','Measure','getBoundsZoom','setStyle','tiledMapLayer','right','170687GVmqXM'];_0x3b54=function(){return _0x11cda9;};return _0x3b54();}var sidepanelRight=L[_0x2501f1(0x1ee)][_0x2501f1(0x1e3)](_0x2501f1(0x1e0),{'panelPosition':_0x2501f1(0x221),'tabsPosition':_0x2501f1(0x1e7),'pushControls':!0x0})['addTo'](map);L['control']['opacity'](overlayMaps,{'label':_0x2501f1(0x20d),'collapsed':!0x0})[_0x2501f1(0x1eb)](map);
