"use strict";

var geoWebCacheName = 'geoWebCacheName';
var carDealsCacheImagesName = 'carDealsCacheImagesV1';
var carDealsCachePagesName = 'carDealsCachePagesV1';

var geoWebFiles = [
    '/index.html',
    '/css/paneltabstyles.css',
    '/css/style_dropdowns.css', 
    '/css/style.css',
    '/scripts/material.min.js',
    '/css/material.min.css',
    '/css/style_chart_popup.css',
    '/css/style_mapbox.css',
    '/css/bootstrap-combobox.css',
    '/css/bootstrap-select.scss',
    '/scripts/bootstrap-combobox.js',
    '/scripts/bootstrap-select.js',
    '/scripts/jquery_3.3.1.js',
    '/scripts/jquery-ui.js',
    '/scripts/jquery-ui.min.js',
    '/css/jquery-ui.theme.css',
    '/css/jquery-ui.css',
    '/scripts/bootstrap.js',
    '/scripts/SmoothScroll.min.js',
    '/scripts/Control-map-popup-display.js',
    '/scripts/datatables.js',
    '/scripts/dataTables.buttons.js',
    '/scripts/buttons.flash.js',
    '/scripts/buttons.html5.js',
    '/scripts/buttons.print.js',
    '/scripts/pdfmake.js',
    '/scripts/vfs_fonts.js',
    '/scripts/jszip.js',
    '/scripts/buttons.colVis.js',
    '/scripts/dataTables.select.js',
    '/css/datatables.css',
    '/css/buttons.dataTables.css',
    '/css/buttons.bootstrap.css',
    '/css/select.bootstrap.css',
    '/scripts/highcharts.js',
    '/scripts/exporting.js',
    '/scripts/export-data.js',
    '/scripts/highcharts-more.js',
    '/css/highcharts.css',
    '/css/legendStyle.css',
    '/css/side_controls_style.css',
    '/css/leaflet-search.css',
    '/css/leaflet-search.mobile.css',
    '/css/leaflet.css',
    '/css/leaflet-geojson-selector.css',
    '/scripts/leaflet.js',
    '/scripts/leaflet-src.js',
    '/Data/Districts_Layer_1.js',
    '/Data/district_population_by_age_group_final.js',
    '/Data/Regional_population_final.js',
    '/Data/Regional_population_ethnicity_final.js',
    '/Data/Regional_population_by_nationality_final.js',
    '/Data/Regional_population_religious_belief_final.js',
    '/scripts/leaflet-search-geocoder.js',
    '/scripts/leaflet-search.js',
    '/scripts/mapbox.js',
    '/scripts/leaflet-geojson-selector.js',
    '/scripts/districtTable.js',
    '/scripts/district_by_agegroup.js',
    '/scripts/regional_data.js',
    '/scripts/regional_agegroup_data.js',
    '/scripts/regional_nationality_data.js',
    '/scripts/regional_religious_affiliation_data.js',
    '/scripts/regional_ethnicity_data.js',
    '/scripts/load_map.js',
    '/scripts/side_controls.js',
    '/scripts/displayTables.js',
    '/scripts/TableCheckboxDisplay.js',
    '/scripts/TableCheckboxDistrictAgegroup.js',
    '/scripts/TableCheckboxRegional.js',
    '/scripts/TableCheckboxRegionalAgegroup.js',
    '/scripts/TableCheckboxRegionalNationality.js',
    '/scripts/TableCheckboxRegionalEthnicity.js',
    '/scripts/TableCheckboxRegionalReligiousAfilliation.js',
    '/scripts/displayDistrictAgroupColumns.js',
    '/scripts/displayRegionalColumns.js',
    '/scripts/displayRegionalAgegroupColumns.js',
    '/scripts/displayRegionalNationalityColumns.js',
    '/scripts/displayRegionalRelAffiliationColumns.js',
    '/scripts/displayRegionalEthnicityColumns.js',
    '/scripts/advanced_search_district.js',
    '/scripts/adv_search_dist_agegroup.js',
    '/scripts/adv_search_reg_pop.js',
    '/scripts/adv_search_reg_age_group.js',
    '/scripts/adv_search_reg_ethnicity.js',
    '/scripts/adv_search_nationality.js',
    '/scripts/adv_search_reg_rel_affiliation.js',
	'/Json/District_agegroup.json',
    '/Json/District_Population.json',
    '/Json/Regional_Agegroup.json',
    '/Json/Regional_ethnicity.json',
    '/Json/Regional_nationality.json',
    '/Json/Regional_pop.json',
    '/Json/Regional_relAffiliation.json',
    
    
];

// var latestPath = '/pluralsight/courses/progressive-web-apps/service/latest-deals.php';
// var imagePath = '/pluralsight/courses/progressive-web-apps/service/car-image.php';
// var carPath = '/pluralsight/courses/progressive-web-apps/service/car.php';

//Installing
//Pre-cache App Shell
self.addEventListener('install', function(event) {
  console.log("From SW: Install Event");
  self.skipWaiting();
  event.waitUntil(
    caches.open(geoWebCacheName)
    .then(function(cache){
      return cache.addAll(geoWebFiles)
    })
  );
});
//V2
//Activating
//Clean up
self.addEventListener('activate', function(event) {
  console.log("From SW: Activate Event");
  self.clients.claim();
  event.waitUntil(
    caches.keys()
      .then(function(cacheKeys){
        var deletePromises = [];
        for(var i = 0; i < cacheKeys.length; i++){
          if(cacheKeys[i] != geoWebCacheName){
            deletePromises.push(caches.delete(cacheKeys[i]));
          }
        }
        return Promise.all(deletePromises);
      })
  );
});

//Event Listeners Once Activated
self.addEventListener('fetch', function(event) {
  var requestUrl = new URL(event.request.url);
  var requestPath = requestUrl.pathname;
  var fileName = requestPath.substring(requestPath.lastIndexOf('/')+1);

  if(fileName == "sw.js"){
    event.respondWith(networkFirstStrategy(event.request));
  }else{
    event.respondWith(cacheFirstStrategy(event.request));
  }
});

//Caching Strategies
function cacheFirstStrategy(request){
  return caches.match(request).then(function(cacheResponse){
    return cacheResponse || fetchRequestAndCache(request);
  });
}

function networkFirstStrategy(request){
  return fetchRequestAndCache(request).catch(function(response){
    return caches.match(request);
  })
}

//Fetch Request And Cache
function fetchRequestAndCache(request){
    return fetch(request).then(function(networkResponse){
      caches.open(getCacheName(request)).then(function(cache) {
        cache.put(request, networkResponse);
      })
      return networkResponse.clone();
    });
}

function getCacheName(request){
    var requestUrl = new URL(request.url);
    var requestPath = requestUrl.pathname;
    return geoWebCacheName;
}

/*self.addEventListener('message', function(event) {
  var sourceID = event.source ? event.source.id : 'unknown';
  event.waitUntil(
    event.source.postMessage({
        sourceID: sourceID,
        message: 'sw:' + event.data
      })
  );
});*/