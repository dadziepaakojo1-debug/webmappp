var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Beacon_2 = new ol.format.GeoJSON();
var features_Beacon_2 = format_Beacon_2.readFeatures(json_Beacon_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Beacon_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Beacon_2.addFeatures(features_Beacon_2);
var lyr_Beacon_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Beacon_2, 
                style: style_Beacon_2,
                popuplayertitle: 'Beacon',
                interactive: true,
                title: '<img src="styles/legend/Beacon_2.png" /> Beacon'
            });
var format_CORD_3 = new ol.format.GeoJSON();
var features_CORD_3 = format_CORD_3.readFeatures(json_CORD_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CORD_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CORD_3.addFeatures(features_CORD_3);
var lyr_CORD_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CORD_3, 
                style: style_CORD_3,
                popuplayertitle: 'CORD',
                interactive: true,
                title: '<img src="styles/legend/CORD_3.png" /> CORD'
            });
var format_Boundary_4 = new ol.format.GeoJSON();
var features_Boundary_4 = format_Boundary_4.readFeatures(json_Boundary_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Boundary_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Boundary_4.addFeatures(features_Boundary_4);
var lyr_Boundary_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Boundary_4, 
                style: style_Boundary_4,
                popuplayertitle: 'Boundary',
                interactive: true,
                title: '<img src="styles/legend/Boundary_4.png" /> Boundary'
            });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_Beacon_2.setVisible(true);lyr_CORD_3.setVisible(true);lyr_Boundary_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleHybrid_1,lyr_Beacon_2,lyr_CORD_3,lyr_Boundary_4];
lyr_Beacon_2.set('fieldAliases', {'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_CORD_3.set('fieldAliases', {'Name': 'Name', 'Eastings': 'Eastings', 'Nothings': 'Nothings', });
lyr_Boundary_4.set('fieldAliases', {'id': 'id', });
lyr_Beacon_2.set('fieldImages', {'Name': 'Range', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_CORD_3.set('fieldImages', {'Name': 'Range', 'Eastings': 'TextEdit', 'Nothings': 'TextEdit', });
lyr_Boundary_4.set('fieldImages', {'id': 'TextEdit', });
lyr_Beacon_2.set('fieldLabels', {'Name': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_CORD_3.set('fieldLabels', {'Name': 'inline label - always visible', 'Eastings': 'inline label - always visible', 'Nothings': 'inline label - always visible', });
lyr_Boundary_4.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_Boundary_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});