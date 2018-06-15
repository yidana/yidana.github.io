    $(function getData(e) {
        $('#dynamicSelection_agegroup').hide()
        $('#dynamicSelection').hide()
        var data = []
        var data_dist_agegroup=[]
        var i = 0
        var tableRow = $('#example tr:not(:first)')
        var tableRow_dist_agegroup=$('#district-agegroup-table tr:not(:first)')
        //populate data array with currently selected data when the button is clicked
        $('#display-data').click(function(){
            //uncheck all other checkboxes when this button is clicked
            $('input[type="checkbox"][name="agegroup"]').each(function(){
                this.checked=false
            })
            // Empty all other dropdowns when this button is clicked
            $("#dynamicSelection").empty()
            $("#dynamicSelection_agegroup").empty()
            //data.length = 0
            setDistrictData(data, i, tableRow)
            console.log(data)
            logData(data)
            data.length = 0


            //quantScale(data)
            //var color=d3.scale.quantize()
            //    .range(["rgb(237,248,233)", "rgb(186,228,179)","rgb(116,196,118)", "rgb(49,163,84)","rgb(0,109,44)"])
            //
            //function quantScale(data){
            //    var dropdown=$('#dynamicSelection').val()
            //    color.domain([
            //        d3.min(data,function(d){return d + '.'+dropdown}),
            //        d3.max(data,function(d){return d + '.'+dropdown})
            //    ])
            //    $.getJSON("E:/My Stuff/Project Work Test/GeoWebService/app/static/app/geojson/Districts_Layer.json", function(json){
            //        for (var i=0; i<data.length; i++){
            //        }
            //    })
            //}

        })
        //function for displaying colors dynamically based on what the user selects in the check box
        function logData(datas){
            console.log(datas)
            var districtNames=[];
            //iterate through the collected data and pass the district names in the data to the districtName array
            for (i in datas){
                districtNames.push(datas[i].District);
            }
            var variables = ['Pop_Total','Male','Female']
//**************************************************************************************************
//            //very important piece of code used to style individual geojson features based on data
                geojson.eachLayer(function (layer) {
                    for (var i in districtNames){
                        var value=districtNames[i];
                        switch (value){
                            case  layer.feature.properties.DISTRICT:layer.setStyle({fillColor:'white'});
                            case  !layer.feature.properties.DISTRICT:layer.setStyle({fillColor:'red',
                                weight: 5,
                                //opacity: 2,
                                color: 'blue',
                                fillOpacity: 0.8
                            });

                        }
                        //if(layer.feature.properties.DISTRICT != value) {
                        //   layer.setStyle({fillColor:'white',
                        //    //weight: 1,
                        //    //opacity: 2,
                        //    color: 'blue',
                        //    //fillOpacity: 0
                        //    })
                        //}
                        //else{
                        //    layer.setStyle(densityStyle(layer.feature))
                        //    console.log(value)
                        //}
                    }
                });
//****************************************************************************************************

// **************************************************************************************************
            //Using foreach for geojson layer
            //very important piece of code used to style individual geojson features based on data
            //    geojson.eachLayer(function (layer) {
            //        for (var i in districtNames){
            //            if(layer.feature.properties.DISTRICT == districtNames[i]) {
            //            layer.setStyle({fillColor:'red'})
            //            }
            //            else{
            //                layer.setStyle({fillColor:'white',
            //                //weight: 1,
            //                //opacity: 2,
            //                color: 'blue',
            //                //fillOpacity: 0
            //                })
            //            }
            //        }
            //
            //    });
//****************************************************************************************************
            //for (var i in districtNames){
            //    for (var j=0; j<geojson.feature.properties.length; j++){
            //        if (geojson.feature[j].properties.DISTRICT==districtNames[i]){
            //            geojson.setStyle({fillColor :'blue'})
            //        }
            //        else{
            //            layer.setStyle({fillColor:'white'})
            //        }
            //    }
            //}
            //for (var i in datas){
            //    if (datas[i]==geojson.feature[i].properties['DISTRICT']){
            //        setDynamicStyle("Pop_Total")
            //    }
            //    else{
            //        return {
            //            fillColor: 'white',
            //            weight: 2,
            //            opacity: 1,
            //            color: 'white',
            //            fillOpacity: 1
            //        }
            //
            //    }
            //    mongo.push((datas[i].Total)*5)
            //}
            console.log(datas)
            console.log(districtNames)
            console.log(data)
        //for (var i in districtNames){
        //    var name=districtNames[i];
        //    for (var  j=0; j<layer.feature.length; j++){
        //        var district=layer.feature[j].properties.DISTRICT;
        //        if(name==district){
        //            //setDynamicStyle(name)
        //            layer.setStyle({fillColor: 'red'})
        //        }
        //        else{
        //            layer.setStyle({
        //                fillColor: 'white',
        //                weight: 2,
        //                opacity: 1,
        //                color: 'white',
        //                fillOpacity: 1})
        //        }
        //    }
        //}
        }

        $('#display-data-distAgegroup').click(function(){
            //uncheck all other checkboxes when this button is clicked
            $('input[type="checkbox"][name="filter"]').each(function(){
                this.checked=false
            })
            $("#dynamicSelection_agegroup").empty()
            $("#dynamicSelection").empty()
            data_dist_agegroup.length = 0
            setDistrictAgegroupData(data_dist_agegroup, i, tableRow_dist_agegroup)
            console.log(data_dist_agegroup)

        })
    })

    //function for storing age group data
    function setDistrictData(data,i,tableRow){
        $('#dynamicSelection_agegroup').hide()
        $('#dynamicSelection').show()
        $('input[type="checkbox"][name="filter"]').each(function () {
            if (this.checked) {
                var val = $(this).val();
                //geojson.eachLayer(function(layer){
                //    if (val==layer.feature.properties.DISTRICT){
                //        layer.setStyle({fillColor:'red'})
                //    }
                //    else{
                //        layer.setStyle({fillColor:'white',
                //        //weight: 1,
                //        //opacity: 2,
                //        color: 'blue',
                //        //fillOpacity: 0
                //        })
                //    }
                //})
                tableRow.each(function () {
                    var tr = $(this)
                    var td = tr.find('td:nth-child(2)');
                    if (td.text()===val){
                        var tbl_data = tr.find('td')
                        //console.log(tbl_data)
                        data[i++] = {
                            id: tbl_data[0].textContent,
                            District: tbl_data[1].textContent,
                            Capital: tbl_data[2].textContent,
                            Total: parseInt(tbl_data[3].textContent),
                            Male: parseInt(tbl_data[4].textContent),
                            Female: parseInt(tbl_data[5].textContent),
                            Region: tbl_data[6].textContent
                        }
                    }
                })
            }
        })
        //$('#display-data').click(function(){
        //    console.log(data)
        //})
        // Populate dropdown with table columns
        var k = 0
        var cols = ['Total','Male','Female']
        //for (var row in data[1]){
        //    cols.push(row)
        //}
        //populate dropdown list with item keys in the data array
        var select = document.getElementById("dynamicSelection")
        for (var j = 0; j < cols.length; j++) {
            var opt = cols[j]
            var el = document.createElement("option")
            el.textContent = opt
            el.value = opt
            select.appendChild(el)
        }
        // Empty dropdown
        cols.length=0
    }

    //function for storing age group data
    function setDistrictAgegroupData(data_dist_agegroup, i, tableRow_dist_agegroup){
        $('#dynamicSelection_agegroup').show()
        $('#dynamicSelection').hide()
        $('input[type="checkbox"][name="agegroup"]').each(function () {
            if (this.checked) {
                var val = $(this).val();
                tableRow_dist_agegroup.each(function () {
                    var tr = $(this)
                    var td = tr.find('td:nth-child(2)');
                    if (td.text()===val){
                        var tbl_data = tr.find('td')
                        //console.log(tbl_data)
                        data_dist_agegroup[i++]={
                            id:tbl_data[0].textContent,
                            District:tbl_data[1].textContent,
                            Total:tbl_data[2].textContent,
                            Male:tbl_data[3].textContent,
                            Female:tbl_data[4].textContent,
                            Ages_0_14_Total:tbl_data[5].textContent,
                            Ages_0_14_Male:tbl_data[6].textContent,
                            Ages_0_14_Female:tbl_data[7].textContent,
                            Ages_15_64_Total:tbl_data[8].textContent,
                            Ages_15_64_Male:tbl_data[9].textContent,
                            Ages_15_64_Female:tbl_data[10].textContent,
                            Ages_65_abv_Total:tbl_data[11].textContent,
                            Ages_65_abv_Male:tbl_data[12].textContent,
                            Ages_65_abv_Female:tbl_data[13].textContent,
                            Region:tbl_data[14].textContent
                        }
                    }
                })
            }
        })
        var k = 0
        var cols = ['Total','Male','Female','Ages 0-14 Total','Ages 0-14 Male','Ages 0-14 Female','Ages 15-64 Total','Ages 15-64 Male','Ages 15-64 Female','Ages 65+ Total','Ages 65+ Male','Ages 64+ Female']
        //populate dropdown list with item keys in the data array
        var select = document.getElementById("dynamicSelection_agegroup")
        for (var j = 0; j < cols.length; j++) {
            var opt = cols[j]
            var el = document.createElement("option")
            el.textContent = opt
            el.value = opt
            select.appendChild(el)
        }
        cols.length=0
    }

    //$('input[type="checkbox"][name="filter"]').on('change', getData)
    //$('input[type="checkbox"][name="agegroup"]').on('change', getData)
    //getData(




//Ages_0_14_Total
//Ages_0_14_Male
//Ages_0_14_Female
//Ages_15_64_Total
//Ages_15_64_Male
//Ages_15_64_Female
//Ages_65_abv_Total
//Ages_65_abv_Male
//Ages_65_abv_Female
//Region


