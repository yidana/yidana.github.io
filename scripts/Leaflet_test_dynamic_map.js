//var color=d3.scale.quantize()
//    .range(["rgb(237,248,233)", "rgb(186,228,179)","rgb(116,196,118)", "rgb(49,163,84)","rgb(0,109,44)"])
//
//var data=[
//{Capital:"Adaklu Waya",District:"Adaklu Anyigbe",Female:15438,Male:14510,Region:"VOLTA",Total:29948,id:"3"},
//{Capital:"Fomena",District:"Adansi North",Female:54036,Male:53055,Region:"ASHANTI",Total:107091,id:"4"},
//{Capital:"New Edubiase",District:"Adansi South",Female:57339,Male:58039,Region:"ASHANTI",Total:115378,id:"5"},
//{Capital:"Agona",District:"Afigya Sekyere",Female:49318,Male:44691,Region:"ASHANTI",Total:94009,id:"6"},
//{Capital:"Kumawu",District:"Afram Plains",Female:34421,Male:30981,Region:"ASHANTI",Total:65402,id:"7"},
//{Capital:"Mankranso",District:"Ahafo Ano South",Female:59914,Male:61745,Region:"ASHANTI",Total:121659,id:"10"},
//{Capital:"Agona",District:"Ahanta West",Female:55216,Male:50999,Region:"WESTERN",Total:106215,id:"11"}]
//
// function quantScale(data){
//    var dropdown=$('#dynamicSelection').val()
//    color.domain([
//        d3.min(data,function(d){return d + '.'+dropdown}),
//        d3.max(data,function(d){return d + '.'+dropdown})
//    ])
//    $.getJSON("E:/My Stuff/Project Work Test/GeoWebService/app/static/app/geojson/Districts_Layer.json", function(json){
//        for (var i=0; i<data.length; i++){
//
//        }
//
//
//    })
//}


























//var map = new L.Map('map', { zoomControl:false });
//    map.dragging.disable();
//    map.touchZoom.disable();
//    map.doubleClickZoom.disable();
//    map.scrollWheelZoom.disable();
//    map.boxZoom.disable();
//    map.keyboard.disable();
//
//    // Create control for dropdown selector
//
//    var selector = L.control({
//        position: 'topright'
//    });
//
//    // Add content to the control
//
//    selector.onAdd = function(map) {
//
//    //create div container
//
//    var div = L.DomUtil.create('div', 'hazard_select');
//
//    //create select element within container (with id, so it can be referred to later
//    div.innerHTML = '<select id="hazard_select"><option value ="FL">River flood</option><option value ="EQ">Earthquake</option><option value ="DR">Water scarcity</option><option value ="CY">Cyclone</option><option value ="CF">Coastal flood</option><option value ="TS">Tsunami</option><option value ="VO">Volcano</option><option value ="LS">Landslide</option></select>';
//      return div;
//    };
//
//    // Add the selector to the map
//     selector.addTo(map);
//
//    var geojson, style_change, hazard;
//
//    // Define a style
//
//    function restylemap(feature, hazard) {
//
//      if (feature.properties.FL_SUB !== null) {
//          return {
//          weight: 1.2,
//          color: '#0072bc',
//          fillColor: '#08519c',
//          lineJoin: 'bevel',
//          opacity: 1.0,
//          fillOpacity: 1.0
//          };
//      }
//      else if (feature.properties.FL_NAT !== null) {
//          return {
//          weight: 1.2,
//          color: '#659ad2',
//          fillColor: '#3182bd',
//          lineJoin: 'bevel',
//          opacity: 1.0,
//          fillOpacity: 1.0
//          };
//      }
//      else if (feature.properties.FL_REG !== null) {
//          return {
//          weight: 1.2,
//          color: '#659ad2',
//          fillColor: '#6baed6',
//          lineJoin: 'bevel',
//          opacity: 1.0,
//          fillOpacity: 1.0
//          };
//      }
//      else {
//          return {
//          weight: 1,
//          color: '#afafaf',
//          fillColor: '#bdd7e7',
//          lineJoin: 'bevel',
//          opacity: 1.0,
//          fillOpacity: 1.0
//          };
//      }
//
//    }
//
//    // Get json through jquery
//
//    $.getJSON("js/dataholdings.geojson", function(data) {
//    geojson = L.geoJson(data, {
//      style: restylemap,
//      onEachFeature: function (feature, layer) {
//       layer.bindPopup("Name: " + feature.properties.ADM0_NAME);
//      },
//
//    });
//
//    // Add event listeners
//
//
//    style_change = L.DomUtil.get("hazard_select");
//    L.DomEvent.addListener(style_change, 'click', function(e) {
//      L.DomEvent.stopPropagation(e);
//    });
//
//    L.DomEvent.addListener(style_change, 'change', changeHandler);
//
//
//    function changeHandler(e) {
//      geojson = L.geoJson(data,
//      restylemap(geojson,e.target.value)
//      )
//    }
//
//
//    map.fitBounds(geojson.getBounds());
//    geojson.addTo(map);
//    });