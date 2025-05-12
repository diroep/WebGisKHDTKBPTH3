var wms_layers = [];

var lyr_GlobalMultiResolutionTopographyGMRTSynthesis_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.gmrt.org/services/mapserver/wms_merc?",
                              attributions: ' ',
                              params: {
                                "LAYERS": "GMRT",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Global Multi-Resolution Topography (GMRT) Synthesis',
                            popuplayertitle: 'Global Multi-Resolution Topography (GMRT) Synthesis',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_GlobalMultiResolutionTopographyGMRTSynthesis_0, 0]);

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Nusa_Tenggara_2 = new ol.format.GeoJSON();
var features_Nusa_Tenggara_2 = format_Nusa_Tenggara_2.readFeatures(json_Nusa_Tenggara_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nusa_Tenggara_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nusa_Tenggara_2.addFeatures(features_Nusa_Tenggara_2);
var lyr_Nusa_Tenggara_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nusa_Tenggara_2, 
                style: style_Nusa_Tenggara_2,
                popuplayertitle: 'Nusa_Tenggara',
                interactive: true,
                title: '<img src="styles/legend/Nusa_Tenggara_2.png" /> Nusa_Tenggara'
            });
var format_NTT_3 = new ol.format.GeoJSON();
var features_NTT_3 = format_NTT_3.readFeatures(json_NTT_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NTT_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NTT_3.addFeatures(features_NTT_3);
var lyr_NTT_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NTT_3, 
                style: style_NTT_3,
                popuplayertitle: 'NTT',
                interactive: true,
                title: '<img src="styles/legend/NTT_3.png" /> NTT'
            });
var format_NTB_4 = new ol.format.GeoJSON();
var features_NTB_4 = format_NTB_4.readFeatures(json_NTB_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NTB_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NTB_4.addFeatures(features_NTB_4);
var lyr_NTB_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NTB_4, 
                style: style_NTB_4,
                popuplayertitle: 'NTB',
                interactive: true,
                title: '<img src="styles/legend/NTB_4.png" /> NTB'
            });
var format_Bali_5 = new ol.format.GeoJSON();
var features_Bali_5 = format_Bali_5.readFeatures(json_Bali_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bali_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bali_5.addFeatures(features_Bali_5);
var lyr_Bali_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bali_5, 
                style: style_Bali_5,
                popuplayertitle: 'Bali',
                interactive: true,
                title: '<img src="styles/legend/Bali_5.png" /> Bali'
            });
var format_Jawa_6 = new ol.format.GeoJSON();
var features_Jawa_6 = format_Jawa_6.readFeatures(json_Jawa_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jawa_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jawa_6.addFeatures(features_Jawa_6);
var lyr_Jawa_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jawa_6, 
                style: style_Jawa_6,
                popuplayertitle: 'Jawa',
                interactive: true,
                title: '<img src="styles/legend/Jawa_6.png" /> Jawa'
            });
var format_KHDTKPadekanmalang_7 = new ol.format.GeoJSON();
var features_KHDTKPadekanmalang_7 = format_KHDTKPadekanmalang_7.readFeatures(json_KHDTKPadekanmalang_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KHDTKPadekanmalang_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KHDTKPadekanmalang_7.addFeatures(features_KHDTKPadekanmalang_7);
var lyr_KHDTKPadekanmalang_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KHDTKPadekanmalang_7, 
                style: style_KHDTKPadekanmalang_7,
                popuplayertitle: 'KHDTK Padekanmalang',
                interactive: true,
                title: '<img src="styles/legend/KHDTKPadekanmalang_7.png" /> KHDTK Padekanmalang'
            });
var format_KHDTKWonogiri_8 = new ol.format.GeoJSON();
var features_KHDTKWonogiri_8 = format_KHDTKWonogiri_8.readFeatures(json_KHDTKWonogiri_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KHDTKWonogiri_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KHDTKWonogiri_8.addFeatures(features_KHDTKWonogiri_8);
var lyr_KHDTKWonogiri_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KHDTKWonogiri_8, 
                style: style_KHDTKWonogiri_8,
                popuplayertitle: 'KHDTK Wonogiri',
                interactive: true,
                title: '<img src="styles/legend/KHDTKWonogiri_8.png" /> KHDTK Wonogiri'
            });
var format_KHDTK_Sumberwringin_9 = new ol.format.GeoJSON();
var features_KHDTK_Sumberwringin_9 = format_KHDTK_Sumberwringin_9.readFeatures(json_KHDTK_Sumberwringin_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KHDTK_Sumberwringin_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KHDTK_Sumberwringin_9.addFeatures(features_KHDTK_Sumberwringin_9);
var lyr_KHDTK_Sumberwringin_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KHDTK_Sumberwringin_9, 
                style: style_KHDTK_Sumberwringin_9,
                popuplayertitle: 'KHDTK_Sumberwringin',
                interactive: true,
                title: '<img src="styles/legend/KHDTK_Sumberwringin_9.png" /> KHDTK_Sumberwringin'
            });
var format_KHDTKSumberwringinBlokBarat_10 = new ol.format.GeoJSON();
var features_KHDTKSumberwringinBlokBarat_10 = format_KHDTKSumberwringinBlokBarat_10.readFeatures(json_KHDTKSumberwringinBlokBarat_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KHDTKSumberwringinBlokBarat_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KHDTKSumberwringinBlokBarat_10.addFeatures(features_KHDTKSumberwringinBlokBarat_10);
var lyr_KHDTKSumberwringinBlokBarat_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KHDTKSumberwringinBlokBarat_10, 
                style: style_KHDTKSumberwringinBlokBarat_10,
                popuplayertitle: 'KHDTK Sumberwringin Blok Barat',
                interactive: true,
                title: '<img src="styles/legend/KHDTKSumberwringinBlokBarat_10.png" /> KHDTK Sumberwringin Blok Barat'
            });
var format_KHDTKSumberwringinBlokTimur_11 = new ol.format.GeoJSON();
var features_KHDTKSumberwringinBlokTimur_11 = format_KHDTKSumberwringinBlokTimur_11.readFeatures(json_KHDTKSumberwringinBlokTimur_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KHDTKSumberwringinBlokTimur_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KHDTKSumberwringinBlokTimur_11.addFeatures(features_KHDTKSumberwringinBlokTimur_11);
var lyr_KHDTKSumberwringinBlokTimur_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KHDTKSumberwringinBlokTimur_11, 
                style: style_KHDTKSumberwringinBlokTimur_11,
                popuplayertitle: 'KHDTK Sumberwringin Blok Timur',
                interactive: true,
                title: '<img src="styles/legend/KHDTKSumberwringinBlokTimur_11.png" /> KHDTK Sumberwringin Blok Timur'
            });
var format_KHDTKPlayen_12 = new ol.format.GeoJSON();
var features_KHDTKPlayen_12 = format_KHDTKPlayen_12.readFeatures(json_KHDTKPlayen_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KHDTKPlayen_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KHDTKPlayen_12.addFeatures(features_KHDTKPlayen_12);
var lyr_KHDTKPlayen_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KHDTKPlayen_12, 
                style: style_KHDTKPlayen_12,
                popuplayertitle: 'KHDTK Playen',
                interactive: true,
                title: '<img src="styles/legend/KHDTKPlayen_12.png" /> KHDTK Playen'
            });
var format_KHDTKPlayen_13 = new ol.format.GeoJSON();
var features_KHDTKPlayen_13 = format_KHDTKPlayen_13.readFeatures(json_KHDTKPlayen_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KHDTKPlayen_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KHDTKPlayen_13.addFeatures(features_KHDTKPlayen_13);
var lyr_KHDTKPlayen_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KHDTKPlayen_13, 
                style: style_KHDTKPlayen_13,
                popuplayertitle: 'KHDTK Playen',
                interactive: true,
                title: 'KHDTK Playen'
            });
var format_KHDTKPadekanmalang_14 = new ol.format.GeoJSON();
var features_KHDTKPadekanmalang_14 = format_KHDTKPadekanmalang_14.readFeatures(json_KHDTKPadekanmalang_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KHDTKPadekanmalang_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KHDTKPadekanmalang_14.addFeatures(features_KHDTKPadekanmalang_14);
var lyr_KHDTKPadekanmalang_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KHDTKPadekanmalang_14, 
                style: style_KHDTKPadekanmalang_14,
                popuplayertitle: 'KHDTK Padekanmalang',
                interactive: true,
                title: '<img src="styles/legend/KHDTKPadekanmalang_14.png" /> KHDTK Padekanmalang'
            });
var format_KHDTKWonogiri_15 = new ol.format.GeoJSON();
var features_KHDTKWonogiri_15 = format_KHDTKWonogiri_15.readFeatures(json_KHDTKWonogiri_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KHDTKWonogiri_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KHDTKWonogiri_15.addFeatures(features_KHDTKWonogiri_15);
var lyr_KHDTKWonogiri_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KHDTKWonogiri_15, 
                style: style_KHDTKWonogiri_15,
                popuplayertitle: 'KHDTK Wonogiri',
                interactive: true,
                title: '<img src="styles/legend/KHDTKWonogiri_15.png" /> KHDTK Wonogiri'
            });
var format_KHDTKSumberwringin_16 = new ol.format.GeoJSON();
var features_KHDTKSumberwringin_16 = format_KHDTKSumberwringin_16.readFeatures(json_KHDTKSumberwringin_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KHDTKSumberwringin_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KHDTKSumberwringin_16.addFeatures(features_KHDTKSumberwringin_16);
var lyr_KHDTKSumberwringin_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KHDTKSumberwringin_16, 
                style: style_KHDTKSumberwringin_16,
                popuplayertitle: 'KHDTK Sumberwringin',
                interactive: true,
                title: '<img src="styles/legend/KHDTKSumberwringin_16.png" /> KHDTK Sumberwringin'
            });

lyr_GlobalMultiResolutionTopographyGMRTSynthesis_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_Nusa_Tenggara_2.setVisible(true);lyr_NTT_3.setVisible(true);lyr_NTB_4.setVisible(true);lyr_Bali_5.setVisible(true);lyr_Jawa_6.setVisible(true);lyr_KHDTKPadekanmalang_7.setVisible(true);lyr_KHDTKWonogiri_8.setVisible(true);lyr_KHDTK_Sumberwringin_9.setVisible(true);lyr_KHDTKSumberwringinBlokBarat_10.setVisible(true);lyr_KHDTKSumberwringinBlokTimur_11.setVisible(true);lyr_KHDTKPlayen_12.setVisible(true);lyr_KHDTKPlayen_13.setVisible(true);lyr_KHDTKPadekanmalang_14.setVisible(true);lyr_KHDTKWonogiri_15.setVisible(true);lyr_KHDTKSumberwringin_16.setVisible(true);
var layersList = [lyr_GlobalMultiResolutionTopographyGMRTSynthesis_0,lyr_OSMStandard_1,lyr_Nusa_Tenggara_2,lyr_NTT_3,lyr_NTB_4,lyr_Bali_5,lyr_Jawa_6,lyr_KHDTKPadekanmalang_7,lyr_KHDTKWonogiri_8,lyr_KHDTK_Sumberwringin_9,lyr_KHDTKSumberwringinBlokBarat_10,lyr_KHDTKSumberwringinBlokTimur_11,lyr_KHDTKPlayen_12,lyr_KHDTKPlayen_13,lyr_KHDTKPadekanmalang_14,lyr_KHDTKWonogiri_15,lyr_KHDTKSumberwringin_16];
lyr_Nusa_Tenggara_2.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'PROV': 'PROV', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_NTT_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PROV': 'PROV', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_NTB_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PROV': 'PROV', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Bali_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PROV': 'PROV', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Jawa_6.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'PROV': 'PROV', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_KHDTKPadekanmalang_7.set('fieldAliases', {'Id': 'Id', });
lyr_KHDTKWonogiri_8.set('fieldAliases', {'Id': 'Id', 'Luas': 'Luas', });
lyr_KHDTK_Sumberwringin_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_KHDTKSumberwringinBlokBarat_10.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_KHDTKSumberwringinBlokTimur_11.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_KHDTKPlayen_12.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_KHDTKPlayen_13.set('fieldAliases', {'Id': 'Id', });
lyr_KHDTKPadekanmalang_14.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'No_Pal': 'No_Pal', 'Kode': 'Kode', 'x': 'x', 'y': 'y', 'Menit': 'Menit', 'Detik': 'Detik', 'DD': 'DD', 'RAD': 'RAD', 'dX': 'dX', 'dY': 'dY', });
lyr_KHDTKWonogiri_15.set('fieldAliases', {'Id': 'Id', 'NO_PAL': 'NO_PAL', 'PAL': 'PAL', 'LABEL': 'LABEL', 'x': 'x', 'y': 'y', 'No': 'No', 'KODE_PAL': 'KODE_PAL', 'KETERANGAN': 'KETERANGAN', });
lyr_KHDTKSumberwringin_16.set('fieldAliases', {'Comment': 'Comment', 'Max_PDOP': 'Max_PDOP', 'Max_HDOP': 'Max_HDOP', 'Corr_Type': 'Corr_Type', 'Rcvr_Type': 'Rcvr_Type', 'GPS_Date': 'GPS_Date', 'GPS_Time': 'GPS_Time', 'Update_Sta': 'Update_Sta', 'Feat_Name': 'Feat_Name', 'Datafile': 'Datafile', 'Unfilt_Pos': 'Unfilt_Pos', 'Filt_Pos': 'Filt_Pos', 'Data_Dicti': 'Data_Dicti', 'GPS_Week': 'GPS_Week', 'GPS_Second': 'GPS_Second', 'GNSS_Heigh': 'GNSS_Heigh', 'Vert_Prec': 'Vert_Prec', 'Horz_Prec': 'Horz_Prec', 'Std_Dev': 'Std_Dev', 'Northing': 'Northing', 'Easting': 'Easting', 'Point_ID': 'Point_ID', 'No_Pal': 'No_Pal', });
lyr_Nusa_Tenggara_2.set('fieldImages', {'OBJECTID_1': '', 'OBJECTID': '', 'PROV': '', 'Shape_Leng': '', 'Shape_Le_1': '', 'Shape_Area': '', });
lyr_NTT_3.set('fieldImages', {'OBJECTID': '', 'PROV': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_NTB_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'PROV': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Bali_5.set('fieldImages', {'OBJECTID': '', 'PROV': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_Jawa_6.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'PROV': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_KHDTKPadekanmalang_7.set('fieldImages', {'Id': '', });
lyr_KHDTKWonogiri_8.set('fieldImages', {'Id': '', 'Luas': '', });
lyr_KHDTK_Sumberwringin_9.set('fieldImages', {'OBJECTID': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_KHDTKSumberwringinBlokBarat_10.set('fieldImages', {'OBJECTID': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_KHDTKSumberwringinBlokTimur_11.set('fieldImages', {'OBJECTID': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_KHDTKPlayen_12.set('fieldImages', {'OBJECTID': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_KHDTKPlayen_13.set('fieldImages', {'Id': 'Range', });
lyr_KHDTKPadekanmalang_14.set('fieldImages', {'OBJECTID': '', 'No_Pal': '', 'Kode': '', 'x': '', 'y': '', 'Menit': '', 'Detik': '', 'DD': '', 'RAD': '', 'dX': '', 'dY': '', });
lyr_KHDTKWonogiri_15.set('fieldImages', {'Id': '', 'NO_PAL': '', 'PAL': '', 'LABEL': '', 'x': '', 'y': '', 'No': '', 'KODE_PAL': '', 'KETERANGAN': '', });
lyr_KHDTKSumberwringin_16.set('fieldImages', {'Comment': '', 'Max_PDOP': '', 'Max_HDOP': '', 'Corr_Type': '', 'Rcvr_Type': '', 'GPS_Date': '', 'GPS_Time': '', 'Update_Sta': '', 'Feat_Name': '', 'Datafile': '', 'Unfilt_Pos': '', 'Filt_Pos': '', 'Data_Dicti': '', 'GPS_Week': '', 'GPS_Second': '', 'GNSS_Heigh': '', 'Vert_Prec': '', 'Horz_Prec': '', 'Std_Dev': '', 'Northing': '', 'Easting': '', 'Point_ID': '', 'No_Pal': '', });
lyr_Nusa_Tenggara_2.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'PROV': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_NTT_3.set('fieldLabels', {'OBJECTID': 'no label', 'PROV': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_NTB_4.set('fieldLabels', {'OBJECTID': 'no label', 'PROV': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Bali_5.set('fieldLabels', {'OBJECTID': 'no label', 'PROV': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Jawa_6.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'PROV': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_KHDTKPadekanmalang_7.set('fieldLabels', {'Id': 'no label', });
lyr_KHDTKWonogiri_8.set('fieldLabels', {'Id': 'no label', 'Luas': 'no label', });
lyr_KHDTK_Sumberwringin_9.set('fieldLabels', {'OBJECTID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_KHDTKSumberwringinBlokBarat_10.set('fieldLabels', {'OBJECTID': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_KHDTKSumberwringinBlokTimur_11.set('fieldLabels', {'OBJECTID': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_KHDTKPlayen_12.set('fieldLabels', {'OBJECTID': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_KHDTKPlayen_13.set('fieldLabels', {'Id': 'no label', });
lyr_KHDTKPadekanmalang_14.set('fieldLabels', {'OBJECTID': 'no label', 'No_Pal': 'no label', 'Kode': 'no label', 'x': 'no label', 'y': 'no label', 'Menit': 'no label', 'Detik': 'no label', 'DD': 'no label', 'RAD': 'no label', 'dX': 'no label', 'dY': 'no label', });
lyr_KHDTKWonogiri_15.set('fieldLabels', {'Id': 'no label', 'NO_PAL': 'no label', 'PAL': 'no label', 'LABEL': 'no label', 'x': 'no label', 'y': 'no label', 'No': 'no label', 'KODE_PAL': 'no label', 'KETERANGAN': 'no label', });
lyr_KHDTKSumberwringin_16.set('fieldLabels', {'Comment': 'no label', 'Max_PDOP': 'no label', 'Max_HDOP': 'no label', 'Corr_Type': 'no label', 'Rcvr_Type': 'no label', 'GPS_Date': 'no label', 'GPS_Time': 'no label', 'Update_Sta': 'no label', 'Feat_Name': 'no label', 'Datafile': 'no label', 'Unfilt_Pos': 'no label', 'Filt_Pos': 'no label', 'Data_Dicti': 'no label', 'GPS_Week': 'no label', 'GPS_Second': 'no label', 'GNSS_Heigh': 'no label', 'Vert_Prec': 'no label', 'Horz_Prec': 'no label', 'Std_Dev': 'no label', 'Northing': 'no label', 'Easting': 'no label', 'Point_ID': 'no label', 'No_Pal': 'no label', });
lyr_KHDTKSumberwringin_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});