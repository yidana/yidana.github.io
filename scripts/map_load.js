// Create map

var mapboxAccessToken = { accessToken: "pk.eyJ1IjoiaXlrZXMiLCJhIjoiY2piZGZlaXRzMWxtbDJxcnR1YzFiZm1uZiJ9.UQOZviVIotV5oVWmSBBSXA" };
var map = L.map("mymap").setView([7.9465, -1.0232], 6);

// create mapbox tile and add to map
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + mapboxAccessToken.accessToken, {
    id: 'mapbox.light'
}).addTo(map);

// create a function for color ranges of population data
function getColor(d) {
    return d > 1730249 ? '#800026' :
        d > 142829 ? '#BD0026' :
            d > 118189 ? '#E31A1C' :
                d > 106136 ? '#FC4E2A' :
                    d > 89943 ? '#FD8D3C' :
                        d > 78069 ? '#FEB24C' :
                            d > 60934 ? '#FED976' :
                                '#FFEDA0';
}

//create another function for stlll
function densityStyle(feature) {
    return {
        fillColor: getColor(feature.properties.Pop_Total),
        weight: 2,
        opacity: 1,
        color: 'white',
        fillOpacity: 1
    };
}

// load geojson and add color with values
var geojson;
//function for mouseover
function highlight(e) {
    var layer = e.target;
    layer.setStyle({
        weight: 3,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });
    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
    info.update(layer.feature.properties);
}

function resetHighlight(e) {
    geojson.resetStyle(e.target);
    info.update();
}

//       function myPopup(feature,layer) {
//            layer.bindPopup(feature.properties.District_I);
//    //map.fitBounds(e.target.getBounds());
//}

function onEachFeature(feature, layer) {

    var content = '<div class="custom-popup" id="map-popup">' + '<table border="1" style="border-collapse:collapse;" cellpadding="5">' +
        '<tr>' + '<th>District: </th>' + '<td><b>' + feature.properties.DISTRICT + '</b></td>' + '</tr>' +
        '<tr>' + '<th>Region: </th>' + '<td>' + feature.properties.REGION + '</td>' + '</tr>' +
        '<tr>' + '<th>Total Population: </th>' + '<td>' + feature.properties.Pop_Total + '</td>' + '</tr>' +
        '<tr>' + '<th>Male: </th>' + '<td>' + feature.properties.Male + '</td>' + '</tr>' +
        '<tr>' + '<th>Female: </th>' + '<td>' + feature.properties.Female + '</td>' + '</tr>' +
        '<table>' + '</div>';
    var customOptions =
        {
            'className': 'custom'
        }

    layer.on({

        mouseover: highlight,
        mouseout: resetHighlight,
        click: layer.bindPopup("<h4>Basic Info</h4>" + content, customOptions)
    });
}
//showing properties on hover

var info = L.control();

info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'infoMat'); // create a div with a class "info"
    this.update();
    return this._div;
};

// method that we will use to update the control based on feature properties passed
info.update = function (props) {
    this._div.innerHTML = '<h4>Ghana Districts Population</h4>' + (props ?
        '<b>' + props.DISTRICT + '</b><br />' + props.Pop_Total + ' people '
        : 'Hover over a district');
};

info.addTo(map);



geojson = L.geoJson(districts_layer_1, {
    style: densityStyle,
    onEachFeature: onEachFeature
}).addTo(map);
    //geojson=L.geoJson(districts,{style: densityStyle}).addTo(map);

    //var legend = L.control({position: 'bottomright' });
    //
    //legend.onAdd = function (map) {
    //
    //    var div = L.DomUtil.create('div', 'info legend'),
    //        grades = [60934, 78069, 89943, 106136, 118189, 142829, 1730249],
    //                            labels = [];
    //    div.innerHTML+='<h4 class="legHead">Legend</h4>'
    //
    //    // loop through our density intervals and generate a label with a colored square for each interval
    //    for (var i = 0; i < grades.length; i++) {
    //        div.innerHTML +=
    //        '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
    //        grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>'+'<br>' : '+');
    //    }
    //
    //    return div;
    //};
    //                          
    //legend.addTo(map);