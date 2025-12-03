var wms_layers = [];

var format_hvirdovre1frededeomrder_0 = new ol.format.GeoJSON();
var features_hvirdovre1frededeomrder_0 = format_hvirdovre1frededeomrder_0.readFeatures(json_hvirdovre1frededeomrder_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hvirdovre1frededeomrder_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hvirdovre1frededeomrder_0.addFeatures(features_hvirdovre1frededeomrder_0);
var lyr_hvirdovre1frededeomrder_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hvirdovre1frededeomrder_0, 
                style: style_hvirdovre1frededeomrder_0,
                popuplayertitle: 'hvirdovre (1) — frededeområder',
                interactive: false,
    title: 'hvirdovre (1) — frededeområder<br />\
    <img src="styles/legend/hvirdovre1frededeomrder_0_0.png" /> Damhuså<br />\
    <img src="styles/legend/hvirdovre1frededeomrder_0_1.png" /> Kalvebod Kile<br />\
    <img src="styles/legend/hvirdovre1frededeomrder_0_2.png" /> Rehbæks Eng<br />\
    <img src="styles/legend/hvirdovre1frededeomrder_0_3.png" /> Vestvolden<br />\
    <img src="styles/legend/hvirdovre1frededeomrder_0_4.png" /> Vigerslevparken, Damhussøen, Damhusengen, Krogebjergparken<br />\
    <img src="styles/legend/hvirdovre1frededeomrder_0_5.png" /> <br />' });
var format_hvirdovre1kommuneplan_1 = new ol.format.GeoJSON();
var features_hvirdovre1kommuneplan_1 = format_hvirdovre1kommuneplan_1.readFeatures(json_hvirdovre1kommuneplan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hvirdovre1kommuneplan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hvirdovre1kommuneplan_1.addFeatures(features_hvirdovre1kommuneplan_1);
var lyr_hvirdovre1kommuneplan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hvirdovre1kommuneplan_1, 
                style: style_hvirdovre1kommuneplan_1,
                popuplayertitle: 'hvirdovre (1) — kommuneplan',
                interactive: true,
                title: '<img src="styles/legend/hvirdovre1kommuneplan_1.png" /> hvirdovre (1) — kommuneplan'
            });
var format_hvirdovre1lokalplanfor_2 = new ol.format.GeoJSON();
var features_hvirdovre1lokalplanfor_2 = format_hvirdovre1lokalplanfor_2.readFeatures(json_hvirdovre1lokalplanfor_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hvirdovre1lokalplanfor_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hvirdovre1lokalplanfor_2.addFeatures(features_hvirdovre1lokalplanfor_2);
var lyr_hvirdovre1lokalplanfor_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hvirdovre1lokalplanfor_2, 
                style: style_hvirdovre1lokalplanfor_2,
                popuplayertitle: 'hvirdovre (1) — lokalplanfor',
                interactive: true,
    title: 'hvirdovre (1) — lokalplanfor<br />\
    <img src="styles/legend/hvirdovre1lokalplanfor_2_0.png" /> 153<br />\
    <img src="styles/legend/hvirdovre1lokalplanfor_2_1.png" /> 155<br />\
    <img src="styles/legend/hvirdovre1lokalplanfor_2_2.png" /> 242<br />\
    <img src="styles/legend/hvirdovre1lokalplanfor_2_3.png" /> <br />' });
var format_hvirdovre1lokalplanvedtaget_3 = new ol.format.GeoJSON();
var features_hvirdovre1lokalplanvedtaget_3 = format_hvirdovre1lokalplanvedtaget_3.readFeatures(json_hvirdovre1lokalplanvedtaget_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hvirdovre1lokalplanvedtaget_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hvirdovre1lokalplanvedtaget_3.addFeatures(features_hvirdovre1lokalplanvedtaget_3);
var lyr_hvirdovre1lokalplanvedtaget_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hvirdovre1lokalplanvedtaget_3, 
                style: style_hvirdovre1lokalplanvedtaget_3,
                popuplayertitle: 'hvirdovre (1) — lokalplanvedtaget',
                interactive: true,
    title: 'hvirdovre (1) — lokalplanvedtaget<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_0.png" /> 001<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_1.png" /> 101-1<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_2.png" /> 102<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_3.png" /> 103<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_4.png" /> 104<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_5.png" /> 105<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_6.png" /> 106<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_7.png" /> 108<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_8.png" /> 109-1<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_9.png" /> 112<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_10.png" /> 115<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_11.png" /> 116<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_12.png" /> 118<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_13.png" /> 119<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_14.png" /> 120<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_15.png" /> 121<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_16.png" /> 122<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_17.png" /> 124<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_18.png" /> 126<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_19.png" /> 127<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_20.png" /> 128<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_21.png" /> 131<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_22.png" /> 132<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_23.png" /> 133<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_24.png" /> 134<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_25.png" /> 135<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_26.png" /> 137<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_27.png" /> 139<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_28.png" /> 140<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_29.png" /> 141<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_30.png" /> 142<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_31.png" /> 143<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_32.png" /> 144<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_33.png" /> 147<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_34.png" /> 148<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_35.png" /> 149<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_36.png" /> 150<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_37.png" /> 151<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_38.png" /> 152<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_39.png" /> 154<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_40.png" /> 202<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_41.png" /> 203<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_42.png" /> 206<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_43.png" /> 207<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_44.png" /> 208<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_45.png" /> 209<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_46.png" /> 210<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_47.png" /> 211<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_48.png" /> 216<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_49.png" /> 220<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_50.png" /> 221<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_51.png" /> 225<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_52.png" /> 226<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_53.png" /> 228<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_54.png" /> 229<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_55.png" /> 230<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_56.png" /> 231<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_57.png" /> 232<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_58.png" /> 233<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_59.png" /> 234<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_60.png" /> 236<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_61.png" /> 237<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_62.png" /> 238<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_63.png" /> 239<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_64.png" /> 240<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_65.png" /> 241<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_66.png" /> 301-1<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_67.png" /> 303<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_68.png" /> 304<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_69.png" /> 305<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_70.png" /> 306<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_71.png" /> 313<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_72.png" /> 314<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_73.png" /> 316<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_74.png" /> 322<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_75.png" /> 323<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_76.png" /> 324<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_77.png" /> 325<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_78.png" /> 326<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_79.png" /> 327<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_80.png" /> 328<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_81.png" /> 329<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_82.png" /> 330<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_83.png" /> 331<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_84.png" /> 332<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_85.png" /> 335<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_86.png" /> 338<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_87.png" /> 339<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_88.png" /> 340<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_89.png" /> 341<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_90.png" /> 342<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_91.png" /> 343<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_92.png" /> 345<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_93.png" /> 403-1<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_94.png" /> 404<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_95.png" /> 405<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_96.png" /> 407<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_97.png" /> 408<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_98.png" /> 409<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_99.png" /> 411<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_100.png" /> 412<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_101.png" /> 418<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_102.png" /> 423<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_103.png" /> 429<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_104.png" /> 432<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_105.png" /> 433<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_106.png" /> 440<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_107.png" /> 441<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_108.png" /> 447<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_109.png" /> 448<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_110.png" /> 452<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_111.png" /> 454<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_112.png" /> 455<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_113.png" /> 456<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_114.png" /> 457<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_115.png" /> 458<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_116.png" /> 459<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_117.png" /> 462<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_118.png" /> 463<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_119.png" /> 464<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_120.png" /> 466<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_121.png" /> 467<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_122.png" /> 468<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_123.png" /> 469<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_124.png" /> 470<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_125.png" /> 471<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_126.png" /> 472<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_127.png" /> 473<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_128.png" /> 475<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_129.png" /> 476<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_130.png" /> 504<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_131.png" /> 507<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_132.png" /> 508<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_133.png" /> 510<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_134.png" /> 511<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_135.png" /> 516<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_136.png" /> 518<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_137.png" /> 519<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_138.png" /> A1<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_139.png" /> A10<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_140.png" /> A11<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_141.png" /> A11 tillæg 1<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_142.png" /> A11 tillæg 2<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_143.png" /> A13<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_144.png" /> A14<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_145.png" /> A15<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_146.png" /> A3<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_147.png" /> A5<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_148.png" /> A7<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_149.png" /> A8<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_150.png" /> A9 med tillæg 1<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_151.png" /> B17<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_152.png" /> B17 tillæg 1<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_153.png" /> H1 med tillæg 1 og 2<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_154.png" /> H1 tillæg 4<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_155.png" /> H10<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_156.png" /> H10 tillæg 1<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_157.png" /> H11<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_158.png" /> H12<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_159.png" /> H13<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_160.png" /> H14<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_161.png" /> H15<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_162.png" /> H16<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_163.png" /> H17<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_164.png" /> H18<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_165.png" /> H20<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_166.png" /> H20 tillæg 1<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_167.png" /> H3<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_168.png" /> H4<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_169.png" /> H5<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_170.png" /> H9<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_171.png" /> Lokalplan 127 med Tillæg nr. 1<br />\
    <img src="styles/legend/hvirdovre1lokalplanvedtaget_3_172.png" /> <br />' });
var format_hvirdovre1StrandBStrandbeskyttelse_4 = new ol.format.GeoJSON();
var features_hvirdovre1StrandBStrandbeskyttelse_4 = format_hvirdovre1StrandBStrandbeskyttelse_4.readFeatures(json_hvirdovre1StrandBStrandbeskyttelse_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hvirdovre1StrandBStrandbeskyttelse_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hvirdovre1StrandBStrandbeskyttelse_4.addFeatures(features_hvirdovre1StrandBStrandbeskyttelse_4);
var lyr_hvirdovre1StrandBStrandbeskyttelse_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hvirdovre1StrandBStrandbeskyttelse_4, 
                style: style_hvirdovre1StrandBStrandbeskyttelse_4,
                popuplayertitle: 'hvirdovre (1) — StrandB — Strandbeskyttelse',
                interactive: false,
                title: '<img src="styles/legend/hvirdovre1StrandBStrandbeskyttelse_4.png" /> hvirdovre (1) — StrandB — Strandbeskyttelse'
            });
var format_hvirdovre1Folkeskolerfolkeskoler_5 = new ol.format.GeoJSON();
var features_hvirdovre1Folkeskolerfolkeskoler_5 = format_hvirdovre1Folkeskolerfolkeskoler_5.readFeatures(json_hvirdovre1Folkeskolerfolkeskoler_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hvirdovre1Folkeskolerfolkeskoler_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hvirdovre1Folkeskolerfolkeskoler_5.addFeatures(features_hvirdovre1Folkeskolerfolkeskoler_5);
var lyr_hvirdovre1Folkeskolerfolkeskoler_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hvirdovre1Folkeskolerfolkeskoler_5, 
                style: style_hvirdovre1Folkeskolerfolkeskoler_5,
                popuplayertitle: 'hvirdovre (1) — Folkeskoler — folkeskoler',
                interactive: true,
                title: '<img src="styles/legend/hvirdovre1Folkeskolerfolkeskoler_5.png" /> hvirdovre (1) — Folkeskoler — folkeskoler'
            });
var format_hvirdovre1Togstationer2_6 = new ol.format.GeoJSON();
var features_hvirdovre1Togstationer2_6 = format_hvirdovre1Togstationer2_6.readFeatures(json_hvirdovre1Togstationer2_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hvirdovre1Togstationer2_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hvirdovre1Togstationer2_6.addFeatures(features_hvirdovre1Togstationer2_6);
var lyr_hvirdovre1Togstationer2_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hvirdovre1Togstationer2_6, 
                style: style_hvirdovre1Togstationer2_6,
                popuplayertitle: 'hvirdovre (1) — Togstationer2',
                interactive: true,
                title: '<img src="styles/legend/hvirdovre1Togstationer2_6.png" /> hvirdovre (1) — Togstationer2'
            });

lyr_hvirdovre1frededeomrder_0.setVisible(true);lyr_hvirdovre1kommuneplan_1.setVisible(true);lyr_hvirdovre1lokalplanfor_2.setVisible(true);lyr_hvirdovre1lokalplanvedtaget_3.setVisible(true);lyr_hvirdovre1StrandBStrandbeskyttelse_4.setVisible(true);lyr_hvirdovre1Folkeskolerfolkeskoler_5.setVisible(true);lyr_hvirdovre1Togstationer2_6.setVisible(true);
var layersList = [lyr_hvirdovre1frededeomrder_0,lyr_hvirdovre1kommuneplan_1,lyr_hvirdovre1lokalplanfor_2,lyr_hvirdovre1lokalplanvedtaget_3,lyr_hvirdovre1StrandBStrandbeskyttelse_4,lyr_hvirdovre1Folkeskolerfolkeskoler_5,lyr_hvirdovre1Togstationer2_6];
lyr_hvirdovre1frededeomrder_0.set('fieldAliases', {'fid': 'fid', 'Temakode': 'Temakode', 'Temanavn': 'Temanavn', 'Objekt_id': 'Objekt_id', 'Version_id': 'Version_id', 'Systid_fra': 'Systid_fra', 'Systid_til': 'Systid_til', 'Oprettet': 'Oprettet', 'Oprindkode': 'Oprindkode', 'Oprindelse': 'Oprindelse', 'Statuskode': 'Statuskode', 'Status': 'Status', 'Off_kode': 'Off_kode', 'Offentlig': 'Offentlig', 'CVR_kode': 'CVR_kode', 'CVR_navn': 'CVR_navn', 'Bruger_id': 'Bruger_id', 'Link': 'Link', 'Shape_area': 'Shape_area', 'Shape_leng': 'Shape_leng', 'Fred_tkode': 'Fred_tkode', 'Fred_tnavn': 'Fred_tnavn', 'Reg_nr': 'Reg_nr', 'Fred_navn': 'Fred_navn', 'Aendr_kode': 'Aendr_kode', 'Aendrbegr': 'Aendrbegr', 'Aar_fredn': 'Aar_fredn', 'Gyldig_fra': 'Gyldig_fra', 'Gyldig_til': 'Gyldig_til', });
lyr_hvirdovre1kommuneplan_1.set('fieldAliases', {'fid': 'fid', 'oid': 'oid', 'id': 'id', 'planid': 'planid', 'objektkode': 'objektkode', 'komnr': 'komnr', 'plannavn': 'plannavn', 'doklink': 'doklink', 'datoforsl': 'datoforsl', 'datovedt': 'datovedt', 'datoaflyst': 'datoaflyst', 'datoikraft': 'datoikraft', 'datoslut': 'datoslut', 'aktuel': 'aktuel', 'datooprt': 'datooprt', 'datoopdt': 'datoopdt', 'status': 'status', 'datostart': 'datostart', 'glkomnr': 'glkomnr', 'kommunenavn': 'kommunenavn', 'glkomnavn': 'glkomnavn', 'glkomnavn_besk': 'glkomnavn_besk', });
lyr_hvirdovre1lokalplanfor_2.set('fieldAliases', {'fid': 'fid', 'plannr': 'plannr', 'plannavn': 'plannavn', 'datovedt': 'datovedt', 'doklink': 'doklink', 'anvendelse': 'anvendelse', });
lyr_hvirdovre1lokalplanvedtaget_3.set('fieldAliases', {'fid': 'fid', 'plannr': 'plannr', 'plannavn': 'plannavn', 'datoforsl': 'datoforsl', 'doklink': 'doklink', 'anvendelse': 'anvendelse', });
lyr_hvirdovre1StrandBStrandbeskyttelse_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'metadataproperty': 'metadataproperty', 'description_href': 'description_href', 'description_title': 'description_title', 'description_nilreason': 'description_nilreason', 'description': 'description', 'descriptionreference_href': 'descriptionreference_href', 'descriptionreference_title': 'descriptionreference_title', 'descriptionreference_nilreason': 'descriptionreference_nilreason', 'identifier_codespace': 'identifier_codespace', 'identifier': 'identifier', 'name': 'name', 'location_location': 'location_location', 'forretningshaendelse': 'forretningshaendelse', 'senestesaglokalid': 'senestesaglokalid', 'forretningsproces': 'forretningsproces', 'id.namespace': 'id.namespace', 'id.lokalid': 'id.lokalid', 'paataenkthandling': 'paataenkthandling', 'registreringfra': 'registreringfra', 'virkningfra': 'virkningfra', 'virkningsaktoer': 'virkningsaktoer', 'temafladeid': 'temafladeid', 'tematype': 'tematype', 'jordstykkelokalid': 'jordstykkelokalid', });
lyr_hvirdovre1Folkeskolerfolkeskoler_5.set('fieldAliases', {'fid': 'fid', 'Skolenavn': 'Skolenavn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_hvirdovre1Togstationer2_6.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_hvirdovre1frededeomrder_0.set('fieldImages', {'fid': 'TextEdit', 'Temakode': 'TextEdit', 'Temanavn': 'TextEdit', 'Objekt_id': 'TextEdit', 'Version_id': 'TextEdit', 'Systid_fra': 'TextEdit', 'Systid_til': 'TextEdit', 'Oprettet': 'TextEdit', 'Oprindkode': 'TextEdit', 'Oprindelse': 'TextEdit', 'Statuskode': 'TextEdit', 'Status': 'TextEdit', 'Off_kode': 'TextEdit', 'Offentlig': 'TextEdit', 'CVR_kode': 'TextEdit', 'CVR_navn': 'TextEdit', 'Bruger_id': 'TextEdit', 'Link': 'TextEdit', 'Shape_area': 'TextEdit', 'Shape_leng': 'TextEdit', 'Fred_tkode': 'TextEdit', 'Fred_tnavn': 'TextEdit', 'Reg_nr': 'TextEdit', 'Fred_navn': 'TextEdit', 'Aendr_kode': 'TextEdit', 'Aendrbegr': 'TextEdit', 'Aar_fredn': 'TextEdit', 'Gyldig_fra': 'TextEdit', 'Gyldig_til': 'TextEdit', });
lyr_hvirdovre1kommuneplan_1.set('fieldImages', {'fid': 'Hidden', 'oid': 'Hidden', 'id': 'Hidden', 'planid': 'Hidden', 'objektkode': 'Hidden', 'komnr': 'Hidden', 'plannavn': 'TextEdit', 'doklink': 'TextEdit', 'datoforsl': 'Hidden', 'datovedt': 'JsonEdit', 'datoaflyst': 'Hidden', 'datoikraft': 'Hidden', 'datoslut': 'Hidden', 'aktuel': 'Hidden', 'datooprt': 'Hidden', 'datoopdt': 'Hidden', 'status': 'Hidden', 'datostart': 'Hidden', 'glkomnr': 'Hidden', 'kommunenavn': 'Hidden', 'glkomnavn': 'Hidden', 'glkomnavn_besk': 'Hidden', });
lyr_hvirdovre1lokalplanfor_2.set('fieldImages', {'fid': '', 'plannr': 'TextEdit', 'plannavn': 'TextEdit', 'datovedt': 'TextEdit', 'doklink': 'TextEdit', 'anvendelse': 'TextEdit', });
lyr_hvirdovre1lokalplanvedtaget_3.set('fieldImages', {'fid': '', 'plannr': 'TextEdit', 'plannavn': 'TextEdit', 'datoforsl': 'TextEdit', 'doklink': 'TextEdit', 'anvendelse': 'TextEdit', });
lyr_hvirdovre1StrandBStrandbeskyttelse_4.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'metadataproperty': 'TextEdit', 'description_href': 'TextEdit', 'description_title': 'TextEdit', 'description_nilreason': 'TextEdit', 'description': 'TextEdit', 'descriptionreference_href': 'TextEdit', 'descriptionreference_title': 'TextEdit', 'descriptionreference_nilreason': 'TextEdit', 'identifier_codespace': 'TextEdit', 'identifier': 'TextEdit', 'name': 'TextEdit', 'location_location': 'TextEdit', 'forretningshaendelse': 'TextEdit', 'senestesaglokalid': 'TextEdit', 'forretningsproces': 'TextEdit', 'id.namespace': 'TextEdit', 'id.lokalid': 'TextEdit', 'paataenkthandling': 'TextEdit', 'registreringfra': 'DateTime', 'virkningfra': 'DateTime', 'virkningsaktoer': 'TextEdit', 'temafladeid': 'TextEdit', 'tematype': 'TextEdit', 'jordstykkelokalid': 'TextEdit', });
lyr_hvirdovre1Folkeskolerfolkeskoler_5.set('fieldImages', {'fid': 'TextEdit', 'Skolenavn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'TextEdit', 'osm_id': 'TextEdit', 'display_na': 'TextEdit', 'category': 'TextEdit', 'type': 'TextEdit', 'latlong': 'TextEdit', });
lyr_hvirdovre1Togstationer2_6.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_hvirdovre1frededeomrder_0.set('fieldLabels', {'fid': 'no label', 'Temakode': 'no label', 'Temanavn': 'no label', 'Objekt_id': 'no label', 'Version_id': 'no label', 'Systid_fra': 'no label', 'Systid_til': 'no label', 'Oprettet': 'no label', 'Oprindkode': 'no label', 'Oprindelse': 'no label', 'Statuskode': 'no label', 'Status': 'no label', 'Off_kode': 'no label', 'Offentlig': 'no label', 'CVR_kode': 'no label', 'CVR_navn': 'no label', 'Bruger_id': 'no label', 'Link': 'no label', 'Shape_area': 'no label', 'Shape_leng': 'no label', 'Fred_tkode': 'no label', 'Fred_tnavn': 'no label', 'Reg_nr': 'no label', 'Fred_navn': 'no label', 'Aendr_kode': 'no label', 'Aendrbegr': 'no label', 'Aar_fredn': 'no label', 'Gyldig_fra': 'no label', 'Gyldig_til': 'no label', });
lyr_hvirdovre1kommuneplan_1.set('fieldLabels', {'plannavn': 'inline label - always visible', 'doklink': 'inline label - always visible', 'datovedt': 'inline label - always visible', });
lyr_hvirdovre1lokalplanfor_2.set('fieldLabels', {'fid': 'no label', 'plannr': 'inline label - always visible', 'plannavn': 'inline label - always visible', 'datovedt': 'inline label - always visible', 'doklink': 'inline label - always visible', 'anvendelse': 'inline label - always visible', });
lyr_hvirdovre1lokalplanvedtaget_3.set('fieldLabels', {'fid': 'no label', 'plannr': 'inline label - always visible', 'plannavn': 'inline label - always visible', 'datoforsl': 'inline label - always visible', 'doklink': 'inline label - always visible', 'anvendelse': 'inline label - always visible', });
lyr_hvirdovre1StrandBStrandbeskyttelse_4.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'metadataproperty': 'no label', 'description_href': 'no label', 'description_title': 'no label', 'description_nilreason': 'no label', 'description': 'no label', 'descriptionreference_href': 'no label', 'descriptionreference_title': 'no label', 'descriptionreference_nilreason': 'no label', 'identifier_codespace': 'no label', 'identifier': 'no label', 'name': 'no label', 'location_location': 'no label', 'forretningshaendelse': 'no label', 'senestesaglokalid': 'no label', 'forretningsproces': 'no label', 'id.namespace': 'no label', 'id.lokalid': 'no label', 'paataenkthandling': 'no label', 'registreringfra': 'no label', 'virkningfra': 'no label', 'virkningsaktoer': 'no label', 'temafladeid': 'no label', 'tematype': 'no label', 'jordstykkelokalid': 'no label', });
lyr_hvirdovre1Folkeskolerfolkeskoler_5.set('fieldLabels', {'fid': 'hidden field', 'Skolenavn': 'inline label - always visible', 'Adresse': 'hidden field', 'By': 'no label', 'Hjemmeside': 'hidden field', 'result_num': 'no label', 'osm_id': 'no label', 'display_na': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', });
lyr_hvirdovre1Togstationer2_6.set('fieldLabels', {'fid': 'no label', 'id': 'hidden field', 'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'no label', 'begin': 'no label', 'end': 'hidden field', 'altitudeMode': 'no label', 'tessellate': 'hidden field', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_hvirdovre1Togstationer2_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});