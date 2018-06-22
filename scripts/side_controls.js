/**
 * Created by Iykes on 1/23/2018.
 */
$(document).ready(function () {
    $("#container-district-pop").hide();
    $("#container-regional-pop").hide();
    $("#district-data").hide();
    $("#district-data-age-group").hide();
    $("#regional-data").hide()
    $("#regional-data-age-group").hide()
    $("#regional-data-nationality").hide()
    $("#regional-data-religious-affiliation").hide()
    $("#regional-data-ethnicity").hide()
    $('input:radio[name=admi][value=district]').click();
    $("#container-district-pop").show();
    $("#selection-district-pop").val('selection-district')
    $("#selection-regional-pop").val('selection-regional')

    //hide display buttons
    $("#display-data").hide()
    $("#display-data-distAgegroup").hide()
    $("#display-data-regional").hide()
    $("#display-data-regionalNat").hide()
    $("#display-data-RegEthnicity").hide()
    $("#display-data-RegRelAffiliation").hide()
    $("#display-data-RegAgegroup").hide()

    // Dispaly Tables
    $("#district-data-table").show()
    $("#district-data-agegroup-table").hide()
    $("#regional-data-table").hide()
    $("#regional-data-agegroup-table").hide()
    $("#regional-data-nationality-table").hide()
    $("#regional-data-religiousAffiliation-table").hide()
    $("#regional-data-ethnicity-table").hide()
    //$("#styleMap").show();

    $("input[value=district]").click(function () {
        $("#container-district-pop").show();
        $("#container-regional-pop").hide()

        //Show district table and hide the rest
        $("#district-data-table").show()
        $("#district-data-agegroup-table").hide()
        $("#regional-data-table").hide()
        $("#regional-data-agegroup-table").hide()
        $("#regional-data-nationality-table").hide()
        $("#regional-data-religiousAffiliation-table").hide()
        $("#regional-data-ethnicity-table").hide()

        //hide any data selection window
        $("#district-data").hide();
        $("#district-data-age-group").hide();
        $("#regional-data").hide()
        $("#regional-data-age-group").hide()
        $("#regional-data-nationality").hide()
        $("#regional-data-religious-affiliation").hide()
        $("#regional-data-ethnicity").hide()

        //select the first element for the district dropdown
        $("#selection-district-pop").val('selection-district')


        //hide display button
        $("#display-data").hide()
        $("#display-data-distAgegroup").hide()
        $("#display-data-regional").hide()
        $("#display-data-regionalNat").hide()
        $("#display-data-RegEthnicity").hide()
        $("#display-data-RegRelAffiliation").hide()
        $("#display-data-RegAgegroup").hide()
        $("#styleMap").show();

        //change with map selection dropdown
        $("#select-map").val("basic-pop")
        map.addLayer(geojson);
        map.removeLayer(regional_geojson);
        map.removeLayer(district_agegroup_json);
        map.removeLayer(geojson_nationality);
        map.removeLayer(geojson_ethnicity);
        map.removeLayer(geojson_religiousAffiliation);

        map.addControl(geoList)
        map.removeControl(geoList_distAgegroup)
        map.removeControl(geoList_regional)
        map.removeControl(geoList_regionalEthnicity)
        map.removeControl(geoList_regionalNationality)
        map.removeControl(geoList_regionalRelAffiliation)


    });
    $("input[value=regional]").click(function () {
        $("#container-district-pop").hide();
        $("#container-regional-pop").show();
        $("#district-data-age-group").hide()
        $("#district-data").hide()

        //Show regional table and hide the rest
        $("#district-data-table").hide()
        $("#district-data-agegroup-table").hide()
        $("#regional-data-table").show()
        $("#regional-data-agegroup-table").hide()
        $("#regional-data-nationality-table").hide()
        $("#regional-data-religiousAffiliation-table").hide()
        $("#regional-data-ethnicity-table").hide()

        //hide any data selection window
        $("#district-data").hide();
        $("#district-data-age-group").hide();
        $("#regional-data").hide()
        $("#regional-data-age-group").hide()
        $("#regional-data-nationality").hide()
        $("#regional-data-religious-affiliation").hide()
        $("#regional-data-ethnicity").hide()
        //$("#styleMap").hide();

        //select the first element for the regional dropdown
        $("#selection-regional-pop").val('selection-regional')

        //hide display button
        $("#display-data").hide()
        $("#display-data-distAgegroup").hide()
        $("#display-data-regional").hide()
        $("#display-data-regionalNat").hide()
        $("#display-data-RegEthnicity").hide()
        $("#display-data-RegRelAffiliation").hide()
        $("#display-data-RegAgegroup").hide()

        //change with map selection dropdown
        $("#select-map").val("pop-regional")
        map.removeLayer(geojson);
        map.addLayer(regional_geojson);
        map.removeLayer(district_agegroup_json);
        map.removeLayer(geojson_nationality);
        map.removeLayer(geojson_ethnicity);
        map.removeLayer(geojson_religiousAffiliation);

        map.removeControl(geoList)
        map.removeControl(geoList_distAgegroup)
        map.addControl(geoList_regional)
        map.removeControl(geoList_regionalEthnicity)
        map.removeControl(geoList_regionalNationality)
        map.removeControl(geoList_regionalRelAffiliation)
    })

    // District dropdowns
    $("#selection-district-pop").change(function () {
        var selected = $(this).val()
        if (selected == 'dist_pop') {
            $("#district-data").show()
            $("#district-data-age-group").hide()

            $("#district-data-table").show()
            $("#district-data-agegroup-table").hide()
            $("#regional-data-table").hide()
            $("#regional-data-agegroup-table").hide()
            $("#regional-data-nationality-table").hide()
            $("#regional-data-religiousAffiliation-table").hide()
            $("#regional-data-ethnicity-table").hide()

            //display buttons to show or hide
            $("#display-data").show()
            $("#display-data-distAgegroup").hide()
            $("#display-data-regional").hide()
            $("#display-data-regionalNat").hide()
            $("#display-data-RegEthnicity").hide()
            $("#display-data-RegRelAffiliation").hide()
            $("#display-data-RegAgegroup").hide()

            //hide and show data dropdown
            $('#dynamicSelection_agegroup').hide()
            $('#dynamicSelection').show()

            //change with map selection dropdown
            $("#select-map").val("basic-pop")
            map.addLayer(geojson);
            map.removeLayer(regional_geojson);
            map.removeLayer(district_agegroup_json);
            map.removeLayer(geojson_nationality);
            map.removeLayer(geojson_ethnicity);
            map.removeLayer(geojson_religiousAffiliation);

            map.addControl(geoList)
            map.removeControl(geoList_distAgegroup)
            map.removeControl(geoList_regional)
            map.removeControl(geoList_regionalEthnicity)
            map.removeControl(geoList_regionalNationality)
            map.removeControl(geoList_regionalRelAffiliation)
        }
        else if (selected == 'dist_pop_age_group') {
            $("#district-data-age-group").show()
            $("#district-data").hide()

            //show district table by agegroup and hide the rest
            $("#district-data-table").hide()
            $("#district-data-agegroup-table").show()
            $("#regional-data-table").hide()
            $("#regional-data-agegroup-table").hide()
            $("#regional-data-nationality-table").hide()
            $("#regional-data-religiousAffiliation-table").hide()
            $("#regional-data-ethnicity-table").hide()

            //display button to show
            $("#display-data").hide()
            $("#display-data-distAgegroup").show()
            $("#display-data-regional").hide()
            $("#display-data-regionalNat").hide()
            $("#display-data-RegEthnicity").hide()
            $("#display-data-RegRelAffiliation").hide()
            $("#display-data-RegAgegroup").hide()

            //hide and show data dropdown
            $('#dynamicSelection_agegroup').show()
            $('#dynamicSelection').hide()


            //change with map selection dropdown
            $("#select-map").val("pop-age-group")
            map.removeLayer(geojson);
            map.removeLayer(regional_geojson);
            map.addLayer(district_agegroup_json);
            map.removeLayer(geojson_nationality);
            map.removeLayer(geojson_ethnicity);
            map.removeLayer(geojson_religiousAffiliation);

            map.removeControl(geoList)
            map.addControl(geoList_distAgegroup)
            map.removeControl(geoList_regional)
            map.removeControl(geoList_regionalEthnicity)
            map.removeControl(geoList_regionalNationality)
            map.removeControl(geoList_regionalRelAffiliation)
        }
        else {
            $("#district-data-age-group").hide()
            $("#district-data").hide()

            // Just show district table if non is selected
            $("#district-data-table").show()
            $("#district-data-agegroup-table").hide()
            $("#regional-data-table").hide()
            $("#regional-data-agegroup-table").hide()
            $("#regional-data-nationality-table").hide()
            $("#regional-data-religiousAffiliation-table").hide()
            $("#regional-data-ethnicity-table").hide()

            $("#display-data").hide()
            $("#display-data-distAgegroup").hide()
            $("#display-data-regional").hide()
            $("#display-data-regionalNat").hide()
            $("#display-data-RegEthnicity").hide()
            $("#display-data-RegRelAffiliation").hide()
            $("#display-data-RegAgegroup").hide()

            //hide and show data dropdown
            $('#dynamicSelection_agegroup').hide()
            $('#dynamicSelection').hide()


            //change with map selection dropdown
            $("#select-map").val("selection")
            map.addLayer(geojson);
            map.removeLayer(regional_geojson);
            map.removeLayer(district_agegroup_json);
            map.removeLayer(geojson_nationality);
            map.removeLayer(geojson_ethnicity);
            map.removeLayer(geojson_religiousAffiliation);

            map.addControl(geoList)
            map.removeControl(geoList_distAgegroup)
            map.removeControl(geoList_regional)
            map.removeControl(geoList_regionalEthnicity)
            map.removeControl(geoList_regionalNationality)
            map.removeControl(geoList_regionalRelAffiliation)

        }
    })

    //Regional Dropdown
    $("#selection-regional-pop").change(function () {
        var selected = $(this).val()
        if (selected == 'regional_pop_dpd') {
            $("#regional-data").show()
            $("#regional-data-age-group").hide()
            $("#regional-data-nationality").hide()
            $("#regional-data-religious-affiliation").hide()
            $("#regional-data-ethnicity").hide()

            //show regional population table and hide the rest
            $("#district-data-table").hide()
            $("#district-data-agegroup-table").hide()
            $("#regional-data-table").show()
            $("#regional-data-agegroup-table").hide()
            $("#regional-data-nationality-table").hide()
            $("#regional-data-religiousAffiliation-table").hide()
            $("#regional-data-ethnicity-table").hide()

            //display button to show
            $("#display-data").hide()
            $("#display-data-distAgegroup").hide()
            $("#display-data-regional").show()
            $("#display-data-regionalNat").hide()
            $("#display-data-RegEthnicity").hide()
            $("#display-data-RegRelAffiliation").hide()
            $("#display-data-RegAgegroup").hide()

            //dropdown to show
            $("#dynamicSelection_regional").show()
            $("#dynamicSelection_regional_nationality").hide()
            $("#dynamicSelection_regional_ethnicity").hide()
            $("#dynamicSelection_regional_relAffiliation").hide()
            $("#dynamicSelection_regional_agegroup").hide()

             //change with map selection dropdown
            $("#select-map").val("pop-regional")
            map.removeLayer(geojson);
            map.addLayer(regional_geojson);
            map.removeLayer(district_agegroup_json);
            map.removeLayer(geojson_nationality);
            map.removeLayer(geojson_ethnicity);
            map.removeLayer(geojson_religiousAffiliation);

            map.removeControl(geoList)
            map.removeControl(geoList_distAgegroup)
            map.addControl(geoList_regional)
            map.removeControl(geoList_regionalEthnicity)
            map.removeControl(geoList_regionalNationality)
            map.removeControl(geoList_regionalRelAffiliation)
        }
        else if (selected == 'regional_pop_dpd_agegrp') {
            $("#regional-data").hide()
            $("#regional-data-age-group").show()
            $("#regional-data-nationality").hide()
            $("#regional-data-religious-affiliation").hide()
            $("#regional-data-ethnicity").hide()

            //show region population table by agegroup and hide the rest
            $("#district-data-table").hide()
            $("#district-data-agegroup-table").hide()
            $("#regional-data-table").hide()
            $("#regional-data-agegroup-table").show()
            $("#regional-data-nationality-table").hide()
            $("#regional-data-religiousAffiliation-table").hide()
            $("#regional-data-ethnicity-table").hide()

            //display button to show
            $("#display-data").hide()
            $("#display-data-distAgegroup").hide()
            $("#display-data-regional").hide()
            $("#display-data-regionalNat").hide()
            $("#display-data-RegEthnicity").hide()
            $("#display-data-RegRelAffiliation").hide()
            $("#display-data-RegAgegroup").show()

            //dropdown to show
            $("#dynamicSelection_regional").hide()
            $("#dynamicSelection_regional_nationality").hide()
            $("#dynamicSelection_regional_ethnicity").hide()
            $("#dynamicSelection_regional_relAffiliation").hide()
            $("#dynamicSelection_regional_agegroup").show()

            //change with map selection dropdown
            $("#select-map").val("pop-regional")
        }
        else if (selected == 'regional_pop_dpd_nationality') {
            $("#regional-data").hide()
            $("#regional-data-age-group").hide()
            $("#regional-data-nationality").show()
            $("#regional-data-religious-affiliation").hide()
            $("#regional-data-ethnicity").hide()

            //show region population table by nationality and hide the rest
            $("#district-data-table").hide()
            $("#district-data-agegroup-table").hide()
            $("#regional-data-table").hide()
            $("#regional-data-agegroup-table").hide()
            $("#regional-data-nationality-table").show()
            $("#regional-data-religiousAffiliation-table").hide()
            $("#regional-data-ethnicity-table").hide()

            //display button to show
            $("#display-data").hide()
            $("#display-data-distAgegroup").hide()
            $("#display-data-regional").hide()
            $("#display-data-regionalNat").show()
            $("#display-data-RegEthnicity").hide()
            $("#display-data-RegRelAffiliation").hide()
            $("#display-data-RegAgegroup").hide()

            //dropdown to show
            $("#dynamicSelection_regional").hide()
            $("#dynamicSelection_regional_nationality").show()
            $("#dynamicSelection_regional_ethnicity").hide()
            $("#dynamicSelection_regional_relAffiliation").hide()
            $("#dynamicSelection_regional_agegroup").hide()

            //change with map selection dropdown
            $("#select-map").val("pop-rgional-nationality")
            map.removeLayer(geojson);
            map.removeLayer(regional_geojson);
            map.removeLayer(district_agegroup_json);
            map.addLayer(geojson_nationality);
            map.removeLayer(geojson_ethnicity);
            map.removeLayer(geojson_religiousAffiliation);

            map.removeControl(geoList)
            map.removeControl(geoList_distAgegroup)
            map.removeControl(geoList_regional)
            map.removeControl(geoList_regionalEthnicity)
            map.addControl(geoList_regionalNationality)
            map.removeControl(geoList_regionalRelAffiliation)
        }
        else if (selected == 'regional_pop_dpd_rel_aff') {
            $("#regional-data").hide()
            $("#regional-data-age-group").hide()
            $("#regional-data-nationality").hide()
            $("#regional-data-religious-affiliation").show()
            $("#regional-data-ethnicity").hide()

            //show region population table by religious affiliation and hide the rest
            $("#district-data-table").hide()
            $("#district-data-agegroup-table").hide()
            $("#regional-data-table").hide()
            $("#regional-data-agegroup-table").hide()
            $("#regional-data-nationality-table").hide()
            $("#regional-data-religiousAffiliation-table").show()
            $("#regional-data-ethnicity-table").hide()

            //display button to show
            $("#display-data").hide()
            $("#display-data-distAgegroup").hide()
            $("#display-data-regional").hide()
            $("#display-data-regionalNat").hide()
            $("#display-data-RegEthnicity").hide()
            $("#display-data-RegRelAffiliation").show()
            $("#display-data-RegAgegroup").hide()

            //dropdown to show
            $("#dynamicSelection_regional").hide()
            $("#dynamicSelection_regional_nationality").hide()
            $("#dynamicSelection_regional_ethnicity").hide()
            $("#dynamicSelection_regional_relAffiliation").show()
            $("#dynamicSelection_regional_agegroup").hide()

            //change with map selection dropdown
            $("#select-map").val("pop-regional-rel-affil")
            map.removeLayer(geojson);
            map.removeLayer(regional_geojson);
            map.removeLayer(district_agegroup_json);
            map.removeLayer(geojson_nationality);
            map.removeLayer(geojson_ethnicity);
            map.addLayer(geojson_religiousAffiliation);

            map.removeControl(geoList)
            map.removeControl(geoList_distAgegroup)
            map.removeControl(geoList_regional)
            map.removeControl(geoList_regionalEthnicity)
            map.removeControl(geoList_regionalNationality)
            map.addControl(geoList_regionalRelAffiliation)
        }
        else if (selected == 'regional_pop_dpd_ethnicity') {
            $("#regional-data").hide()
            $("#regional-data-age-group").hide()
            $("#regional-data-nationality").hide()
            $("#regional-data-religious-affiliation").hide()
            $("#regional-data-ethnicity").show()

            //show region population table by ethnicity and hide the rest
            $("#district-data-table").hide()
            $("#district-data-agegroup-table").hide()
            $("#regional-data-table").hide()
            $("#regional-data-agegroup-table").hide()
            $("#regional-data-nationality-table").hide()
            $("#regional-data-religiousAffiliation-table").hide()
            $("#regional-data-ethnicity-table").show()

            //display button to show
            $("#display-data").hide()
            $("#display-data-distAgegroup").hide()
            $("#display-data-regional").hide()
            $("#display-data-regionalNat").hide()
            $("#display-data-RegEthnicity").show()
            $("#display-data-RegRelAffiliation").hide()
            $("#display-data-RegAgegroup").hide()

            //dropdown to show
            $("#dynamicSelection_regional").hide()
            $("#dynamicSelection_regional_nationality").hide()
            $("#dynamicSelection_regional_ethnicity").show()
            $("#dynamicSelection_regional_relAffiliation").hide()
            $("#dynamicSelection_regional_agegroup").hide()

            //change with map selection dropdown
            $("#select-map").val("pop-regional-ethnicity")
            map.removeLayer(geojson);
            map.removeLayer(regional_geojson);
            map.removeLayer(district_agegroup_json);
            map.removeLayer(geojson_nationality);
            map.addLayer(geojson_ethnicity);
            map.removeLayer(geojson_religiousAffiliation);

            map.removeControl(geoList)
            map.removeControl(geoList_distAgegroup)
            map.removeControl(geoList_regional)
            map.addControl(geoList_regionalEthnicity)
            map.removeControl(geoList_regionalNationality)
            map.removeControl(geoList_regionalRelAffiliation)
        }
        else {
            $("#regional-data").hide()
            $("#regional-data-age-group").hide()
            $("#regional-data-nationality").hide()
            $("#regional-data-religious-affiliation").hide()
            $("#regional-data-ethnicity").hide()

            // Just show region population table hide the rest if non is selected
            $("#district-data-table").hide()
            $("#district-data-agegroup-table").hide()
            $("#regional-data-table").show()
            $("#regional-data-agegroup-table").hide()
            $("#regional-data-nationality-table").hide()
            $("#regional-data-religiousAffiliation-table").hide()
            $("#regional-data-ethnicity-table").hide()

            //display button to show
            $("#display-data").hide()
            $("#display-data-distAgegroup").hide()
            $("#display-data-regional").hide()
            $("#display-data-regionalNat").hide()
            $("#display-data-RegEthnicity").hide()
            $("#display-data-RegRelAffiliation").hide()
            $("#display-data-RegAgegroup").hide()

            //dropdown to show
            $("#dynamicSelection_regional").hide()
            $("#dynamicSelection_regional_nationality").hide()
            $("#dynamicSelection_regional_ethnicity").hide()
            $("#dynamicSelection_regional_relAffiliation").hide()
            $("#dynamicSelection_regional_agegroup").hide()

            //change with map selection dropdown
            $("#select-map").val("pop-regional")
            map.removeLayer(geojson);
            map.addLayer(regional_geojson);
            map.removeLayer(district_agegroup_json);
            map.removeLayer(geojson_nationality);
            map.removeLayer(geojson_ethnicity);
            map.removeLayer(geojson_religiousAffiliation);

            map.removeControl(geoList)
            map.removeControl(geoList_distAgegroup)
            map.addControl(geoList_regional)
            map.removeControl(geoList_regionalEthnicity)
            map.removeControl(geoList_regionalNationality)
            map.removeControl(geoList_regionalRelAffiliation)
        }
    })
});
