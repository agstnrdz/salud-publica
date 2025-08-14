var wms_layers = [];


        var lyr_Argenmap_0 = new ol.layer.Tile({
            'title': 'Argenmap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/capabaseargenmap@EPSG:3857@png/{z}/{x}/{-y}.png'
            })
        });
var format_Barrios_1 = new ol.format.GeoJSON();
var features_Barrios_1 = format_Barrios_1.readFeatures(json_Barrios_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Barrios_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Barrios_1.addFeatures(features_Barrios_1);
var lyr_Barrios_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Barrios_1, 
                style: style_Barrios_1,
                popuplayertitle: 'Barrios',
                interactive: false,
                title: '<img src="styles/legend/Barrios_1.png" /> Barrios'
            });
var format_Infraestructuradesaludpblica_2 = new ol.format.GeoJSON();
var features_Infraestructuradesaludpblica_2 = format_Infraestructuradesaludpblica_2.readFeatures(json_Infraestructuradesaludpblica_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Infraestructuradesaludpblica_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Infraestructuradesaludpblica_2.addFeatures(features_Infraestructuradesaludpblica_2);
var lyr_Infraestructuradesaludpblica_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Infraestructuradesaludpblica_2, 
                style: style_Infraestructuradesaludpblica_2,
                popuplayertitle: 'Infraestructura de salud pública',
                interactive: true,
    title: 'Infraestructura de salud pública<br />\
    <img src="styles/legend/Infraestructuradesaludpblica_2_0.png" /> CAPS municipal<br />\
    <img src="styles/legend/Infraestructuradesaludpblica_2_1.png" /> CAPS provincial <br />\
    <img src="styles/legend/Infraestructuradesaludpblica_2_2.png" /> Hospital nacional<br />\
    <img src="styles/legend/Infraestructuradesaludpblica_2_3.png" /> Hospital provincial<br />'
        });

lyr_Argenmap_0.setVisible(true);lyr_Barrios_1.setVisible(true);lyr_Infraestructuradesaludpblica_2.setVisible(true);
var layersList = [lyr_Argenmap_0,lyr_Barrios_1,lyr_Infraestructuradesaludpblica_2];
lyr_Barrios_1.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', });
lyr_Infraestructuradesaludpblica_2.set('fieldAliases', {'fid': 'fid', 'Tipo': 'Tipo', 'Nombre': 'Nombre', 'Direccion': 'Direccion', 'Altura': 'Altura', 'Interseccion': 'Interseccion', 'Barrio': 'Barrio', 'Tel': 'Tel', 'Lat': 'Lat', 'Lng': 'Lng', });
lyr_Barrios_1.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', });
lyr_Infraestructuradesaludpblica_2.set('fieldImages', {'fid': 'TextEdit', 'Tipo': 'TextEdit', 'Nombre': 'TextEdit', 'Direccion': 'TextEdit', 'Altura': 'TextEdit', 'Interseccion': 'TextEdit', 'Barrio': 'TextEdit', 'Tel': 'TextEdit', 'Lat': 'TextEdit', 'Lng': 'TextEdit', });
lyr_Barrios_1.set('fieldLabels', {'fid': 'no label', 'nombre': 'no label', });
lyr_Infraestructuradesaludpblica_2.set('fieldLabels', {'fid': 'hidden field', 'Tipo': 'inline label - visible with data', 'Nombre': 'inline label - visible with data', 'Direccion': 'inline label - visible with data', 'Altura': 'inline label - visible with data', 'Interseccion': 'inline label - visible with data', 'Barrio': 'inline label - visible with data', 'Tel': 'inline label - visible with data', 'Lat': 'hidden field', 'Lng': 'hidden field', });
lyr_Infraestructuradesaludpblica_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});