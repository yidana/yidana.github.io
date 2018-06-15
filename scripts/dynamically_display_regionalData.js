/**
 * Created by Iykes on 2/28/2018.
 */
$(function getData(e){
    $("#dynamicSelection_regional").hide()
    $("#dynamicSelection_regional_nationality").hide()
    $("#dynamicSelection_regional_ethnicity").hide()
    $("#dynamicSelection_regional_relAffiliation").hide()
    $("#dynamicSelection_regional_agegroup").hide()
    var data_regional=[]
    var data_regionalAgegroup=[]
    var data_regionalNationality=[]
    var data_regionalEthnicity=[]
    var data_relAffiliation=[]
    var i=0
    var tableRows_regional = $('#regional-table tr:not(:first)');
    var tableRows_regionalAgegroup = $('#regional-agegroup-table tr:not(:first)');
    var tableRows_regionalEthnicity = $('#regional-ethnicity-table tr:not(:first)');
    var tableRows_regionalNationality = $('#regional-nationality-table tr:not(:first)');
    var tableRows_regional_relAffiliation = $('#regional-religiousAffiliation-table tr:not(:first)');

    //get regional data on button click
    $('#display-data-regional').click(function(){
        //uncheck all other checkboxes when this button is clicked
        $('input[type="checkbox"][name="regionalAgegroup"]').each(function(){
            this.checked=false
        })
        $('input[type="checkbox"][name="regionalNationality"]').each(function(){
            this.checked=false
        })
        $('input[type="checkbox"][name="regionalEthnicity"]').each(function(){
            this.checked=false
        })
        $('input[type="checkbox"][name="regionalReligiousAfilliation"]').each(function(){
            this.checked=false
        })
        //$('input[type="checkbox"][name="regional"]').each(function(){
        //    this.checked=false
        //})
        $("#dynamicSelection_regional").empty()
        $("#dynamicSelection_regional_nationality").empty()
        $("#dynamicSelection_regional_ethnicity").empty()
        $("#dynamicSelection_regional_relAffiliation").empty()
        $("#dynamicSelection_regional_agegroup").empty()
        data_regional.length = 0
        setregionalData(data_regional, i, tableRows_regional)
        console.log(data_regional)
    })
    $('#display-data-regionalNat').click(function(){
        //uncheck all other checkboxes when this button is clicked
        $('input[type="checkbox"][name="regionalAgegroup"]').each(function(){
            this.checked=false
        })
        //$('input[type="checkbox"][name="regionalNationality"]').each(function(){
        //    this.checked=false
        //})
        $('input[type="checkbox"][name="regionalEthnicity"]').each(function(){
            this.checked=false
        })
        $('input[type="checkbox"][name="regionalReligiousAfilliation"]').each(function(){
            this.checked=false
        })
        $('input[type="checkbox"][name="regional"]').each(function(){
            this.checked=false
        })
        $("#dynamicSelection_regional_nationality").empty()
        $("#dynamicSelection_regional").empty()
        $("#dynamicSelection_regional_ethnicity").empty()
        $("#dynamicSelection_regional_relAffiliation").empty()
        $("#dynamicSelection_regional_agegroup").empty()
        data_regionalNationality.length = 0
        setregionalDataNationality(data_regionalNationality, i, tableRows_regionalNationality)
        console.log(data_regionalNationality)
    })
    $('#display-data-RegEthnicity').click(function(){
        $('input[type="checkbox"][name="regionalAgegroup"]').each(function(){
            this.checked=false
        })
        $('input[type="checkbox"][name="regionalNationality"]').each(function(){
            this.checked=false
        })
        //$('input[type="checkbox"][name="regionalEthnicity"]').each(function(){
        //    this.checked=false
        //})
        $('input[type="checkbox"][name="regionalReligiousAfilliation"]').each(function(){
            this.checked=false
        })
        $('input[type="checkbox"][name="regional"]').each(function(){
            this.checked=false
        })
        $("#dynamicSelection_regional_ethnicity").empty()
        $("#dynamicSelection_regional").empty()
        $("#dynamicSelection_regional_nationality").empty()
        $("#dynamicSelection_regional_relAffiliation").empty()
        $("#dynamicSelection_regional_agegroup").empty()
        data_regionalEthnicity.length = 0
        setregionalDataEthnicity(data_regionalEthnicity, i, tableRows_regionalEthnicity)
        console.log(data_regionalEthnicity)
    })
    $('#display-data-RegRelAffiliation').click(function(){
        $('input[type="checkbox"][name="regionalAgegroup"]').each(function(){
            this.checked=false
        })
        $('input[type="checkbox"][name="regionalNationality"]').each(function(){
            this.checked=false
        })
        $('input[type="checkbox"][name="regionalEthnicity"]').each(function(){
            this.checked=false
        })
        //$('input[type="checkbox"][name="regionalReligiousAfilliation"]').each(function(){
        //    this.checked=false
        //})
        $('input[type="checkbox"][name="regional"]').each(function(){
            this.checked=false
        })

        $("#dynamicSelection_regional_relAffiliation").empty()
        $("#dynamicSelection_regional").empty()
        $("#dynamicSelection_regional_nationality").empty()
        $("#dynamicSelection_regional_ethnicity").empty()
        $("#dynamicSelection_regional_agegroup").empty()
        data_relAffiliation.length = 0
        setregionalDataRelAffiliation(data_relAffiliation, i, tableRows_regional_relAffiliation)
        console.log(data_relAffiliation)
    })
    $('#display-data-RegAgegroup').click(function(){
        //$('input[type="checkbox"][name="regionalAgegroup"]').each(function(){
        //    this.checked=false
        //})
        $('input[type="checkbox"][name="regionalNationality"]').each(function(){
            this.checked=false
        })
        $('input[type="checkbox"][name="regionalEthnicity"]').each(function(){
            this.checked=false
        })
        $('input[type="checkbox"][name="regionalReligiousAfilliation"]').each(function(){
            this.checked=false
        })
        $('input[type="checkbox"][name="regional"]').each(function(){
            this.checked=false
        })
        $("#dynamicSelection_regional_agegroup").empty()
        $("#dynamicSelection_regional").empty()
        $("#dynamicSelection_regional_nationality").empty()
        $("#dynamicSelection_regional_ethnicity").empty()
        $("#dynamicSelection_regional_relAffiliation").empty()
        data_regionalAgegroup.length = 0
        setregionalDataAgegroup(data_regionalAgegroup, i, tableRows_regionalAgegroup)
        console.log(data_regionalAgegroup)
    })

});

function setregionalData(data, i, tableRow){
    $("#dynamicSelection_regional").show()
    $("#dynamicSelection_regional_nationality").hide()
    $("#dynamicSelection_regional_ethnicity").hide()
    $("#dynamicSelection_regional_relAffiliation").hide()
    $("#dynamicSelection_regional_agegroup").hide()
    $('input[type="checkbox"][name="regional"]').each(function () {
        if (this.checked) {
            var val = $(this).val();
            tableRow.each(function () {
                var tr = $(this)
                var td = tr.find('td:nth-child(2)');
                if (td.text()===val){
                    var tbl_data = tr.find('td')
                    //console.log(tbl_data)
                    data[i++]={
                        id:tbl_data[0].textContent,
                        Region:tbl_data[1].textContent,
                        Capital:tbl_data[2].textContent,
                        Total:tbl_data[3].textContent,
                        Male:tbl_data[4].textContent,
                        Female:tbl_data[5].textContent,
                    }
                }
            })
        }
    })
    var k = 0
    var cols = ['Total','Male','Female']
    var select = document.getElementById("dynamicSelection_regional")
    for (var j = 0; j < cols.length; j++) {
        var opt = cols[j]
        var el = document.createElement("option")
        el.textContent = opt
        el.value = opt
        select.appendChild(el)
    }
    cols.length=0
}

function setregionalDataAgegroup(data, i, tableRow){
    $("#dynamicSelection_regional").hide()
    $("#dynamicSelection_regional_nationality").hide()
    $("#dynamicSelection_regional_ethnicity").hide()
    $("#dynamicSelection_regional_relAffiliation").hide()
    $("#dynamicSelection_regional_agegroup").show()
    $('input[type="checkbox"][name="regionalAgegroup"]').each(function () {
        if (this.checked) {
            var val = $(this).val();
            tableRow.each(function () {
                var tr = $(this)
                var td = tr.find('td:nth-child(2)');
                if (td.text()===val){
                    var tbl_data = tr.find('td')
                    //console.log(tbl_data)
                    data[i++]={
                        id:tbl_data[0].textContent,
                        Region:tbl_data[1].textContent,
                        Capital:tbl_data[2].textContent,
                        Total:tbl_data[3].textContent,
                        Male:tbl_data[4].textContent,
                        Female:tbl_data[5].textContent,
                        Ages_0_14:tbl_data[6].textContent,
                        Ages_15_64:tbl_data[7].textContent,
                        Ages_65_abv:tbl_data[8].textContent
                    }
                }
            })
        }
    })
    var k = 0
    var cols = ['Total','Male','Female','Ages 0-14','Ages 15-64','Ages Above 65']
    var select = document.getElementById("dynamicSelection_regional_agegroup")
    for (var j = 0; j < cols.length; j++) {
        var opt = cols[j]
        var el = document.createElement("option")
        el.textContent = opt
        el.value = opt
        select.appendChild(el)
    }
    cols.length=0
}

function setregionalDataNationality(data, i, tableRow){
    $("#dynamicSelection_regional").hide()
    $("#dynamicSelection_regional_nationality").show()
    $("#dynamicSelection_regional_ethnicity").hide()
    $("#dynamicSelection_regional_relAffiliation").hide()
    $("#dynamicSelection_regional_agegroup").hide()
    $('input[type="checkbox"][name="regionalNationality"]').each(function () {
        if (this.checked) {
            var val = $(this).val();
            tableRow.each(function () {
                var tr = $(this)
                var td = tr.find('td:nth-child(2)');
                if (td.text()===val){
                    var tbl_data = tr.find('td')
                    //console.log(tbl_data)
                    data[i++]={
                        id:tbl_data[0].textContent,
                        Region:tbl_data[1].textContent,
                        Capital:tbl_data[2].textContent,
                        Total:tbl_data[3].textContent,
                        per_by_birth:tbl_data[4].textContent,
                        per_by_naturalisation:tbl_data[5].textContent,
                        per_by_non_ghn:tbl_data[6].textContent,
                        By_Birth:tbl_data[7].textContent,
                        By_Naturalisation:tbl_data[8].textContent,
                        Non_Ghanaian:tbl_data[9].textContent
                    }
                }
            })
        }
    })
    var k = 0
    var cols = ['Total','% By Birth','% by Naturalisation','% Non-Ghanaian','Population By Birth','Population By Naturalisation','Population By Non-Ghanaian ']
    var select = document.getElementById("dynamicSelection_regional_nationality")
    for (var j = 0; j < cols.length; j++) {
        var opt = cols[j]
        var el = document.createElement("option")
        el.textContent = opt
        el.value = opt
        select.appendChild(el)
    }
    cols.length=0

}

function setregionalDataEthnicity(data, i, tableRow){
    $("#dynamicSelection_regional").hide()
    $("#dynamicSelection_regional_nationality").hide()
    $("#dynamicSelection_regional_ethnicity").show()
    $("#dynamicSelection_regional_relAffiliation").hide()
    $("#dynamicSelection_regional_agegroup").hide()
    $('input[type="checkbox"][name="regionalEthnicity"]').each(function () {
        if (this.checked) {
            var val = $(this).val();
            tableRow.each(function () {
                var tr = $(this)
                var td = tr.find('td:nth-child(2)');
                if (td.text()===val){
                    var tbl_data = tr.find('td')
                    //console.log(tbl_data)
                    data[i++]={
                        id:tbl_data[0].textContent,
                        Region:tbl_data[1].textContent,
                        Total:tbl_data[2].textContent,
                        per_akan:tbl_data[3].textContent,
                        per_ga_dangme:tbl_data[4].textContent,
                        per_ewe:tbl_data[5].textContent,
                        per_guan:tbl_data[6].textContent,
                        per_gurma:tbl_data[7].textContent,
                        per_mole_dagbani:tbl_data[8].textContent,
                        per_grusi:tbl_data[9].textContent,
                        per_mande:tbl_data[10].textContent,
                        per_other:tbl_data[11].textContent,
                        pop_akan:tbl_data[12].textContent,
                        pop_ga_dangme:tbl_data[13].textContent,
                        pop_ewe:tbl_data[14].textContent,
                        pop_guan:tbl_data[15].textContent,
                        pop_gurma:tbl_data[16].textContent,
                        pop_mole_dagbani:tbl_data[17].textContent,
                        pop_grusi:tbl_data[18].textContent,
                        pop_mande:tbl_data[19].textContent,
                        pop_other:tbl_data[20].textContent
                    }
                }
            })
        }
    })
    var k = 0
    var cols = ['Total' ,'% Akan' ,'% Ga-Dangme' ,'% Ewe' ,'% Guan' ,'% Gurma' ,'% Mole Dagbani' ,'% Grusi' ,'% Mande' ,'% Other','Akan','Ga-Dangme','Ewe','Guan','Gurma','Mole Dagbani','Grusi','Mande','Other']
    var select = document.getElementById("dynamicSelection_regional_ethnicity")
    for (var j = 0; j < cols.length; j++) {
        var opt = cols[j]
        var el = document.createElement("option")
        el.textContent = opt
        el.value = opt
        select.appendChild(el)
    }
    cols.length=0
}

function setregionalDataRelAffiliation(data, i, tableRow){
    $("#dynamicSelection_regional").hide()
    $("#dynamicSelection_regional_nationality").hide()
    $("#dynamicSelection_regional_ethnicity").hide()
    $("#dynamicSelection_regional_relAffiliation").show()
    $("#dynamicSelection_regional_agegroup").hide()
    $('input[type="checkbox"][name="regionalReligiousAfilliation"]').each(function () {
        if (this.checked) {
            var val = $(this).val();
            tableRow.each(function () {
                var tr = $(this)
                var td = tr.find('td:nth-child(2)');
                if (td.text()===val){
                    var tbl_data = tr.find('td')
                    //console.log(tbl_data)
                    data[i++]={
                        id:tbl_data[0].textContent,
                        Region:tbl_data[1].textContent,
                        Total:tbl_data[2].textContent,
                        per_no_religion:tbl_data[3].textContent,
                        per_catholic:tbl_data[4].textContent,
                        per_protestine:tbl_data[5].textContent,
                        per_pent_or_charistmat:tbl_data[6].textContent,
                        per_other_christian:tbl_data[7].textContent,
                        per_islam:tbl_data[8].textContent,
                        per_traditionalist:tbl_data[9].textContent,
                        per_other:tbl_data[10].textContent,
                        pop_no_religion:tbl_data[11].textContent,
                        pop_catholic:tbl_data[12].textContent,
                        pop_protestine:tbl_data[13].textContent,
                        pop_pent_or_charistmat:tbl_data[14].textContent,
                        pop_other_christian:tbl_data[15].textContent,
                        pop_islam:tbl_data[16].textContent,
                        pop_traditionalist:tbl_data[17].textContent,
                        pop_other:tbl_data[18].textContent
                    }
                }
            })
        }
    })
    var k = 0
    var cols = ['Total' ,'% No Religion' ,'% Catholic' ,'% Protestine' ,'% Pentecostal or Charistmatic' ,'% Other Christian' ,'% Islam' ,'% Traditionalist' ,'% Other','No Religion','Catholic','Protestine','Pentecostal or Charistmatic','Other', 'Christian','Islam','Traditionalist','Other']
    var select = document.getElementById("dynamicSelection_regional_relAffiliation")
    for (var j = 0; j < cols.length; j++) {
        var opt = cols[j]
        var el = document.createElement("option")
        el.textContent = opt
        el.value = opt
        select.appendChild(el)
    }
    cols.length=0
}


            // Checking which regional population table is selected
//$('#selection-regional-pop').change(function(){
//            var regional_value=$(this).val()
//            if(regional_value=='regional_pop_dpd'){
//                $('input[type="checkbox"][name="regional"]').each(function () {if ($(this).is(':checked')) {
//                    var val = $(this).val();
//                    tableRows_regional.each(function () {
//                        var tr = $(this)
//                        var td = tr.find('td:nth-child(2)');
//                        if (td.text()===val){
//                            var tbl_data = tr.find('td')
//                            if (tbl_data.length > 1) {//var data_values=[]
//                             data_regional[i++]={
//                                 id:tbl_data[0].textContent,
//                                 Region:tbl_data[1].textContent,
//                                 Capital:tbl_data[2].textContent,
//                                 Total:tbl_data[3].textContent,
//                                 Male:tbl_data[4].textContent,
//                                 Female:tbl_data[5].textContent,
//                            }
//                        }
//                    }
//                })
//                }
//            })
//            console.log(data_regional)
//        }
//            else if(regional_value=='regional_pop_dpd_agegrp'){
//                $('input[type="checkbox"][name="regionalAgegroup"]').each(function () {
//                    if ($(this).is(':checked')) {
//                        var val = $(this).val();
//                        tableRows_regionalAgegroup.each(function () {
//                            var tr = $(this)
//                            var td = tr.find('td:nth-child(2)');
//                            if (td.text()===val){
//                                var tbl_data = tr.find('td')
//                                if (tbl_data.length > 1) {//var data_values=[]
//                                 data_regionalAgegroup[i++]={
//                                     id:tbl_data[0].textContent,
//                                     Region:tbl_data[1].textContent,
//                                     Capital:tbl_data[2].textContent,
//                                     Total:tbl_data[3].textContent,
//                                     Male:tbl_data[4].textContent,
//                                     Female:tbl_data[5].textContent,
//                                     Ages_0_14:tbl_data[6].textContent,
//                                     Ages_15_64:tbl_data[7].textContent,
//                                     Ages_65_abv:tbl_data[8].textContent
//                                 }
//                            }
//                        }
//                    })
//                }
//            })
//            console.log(data_regionalAgegroup)
//        }
//            else if(regional_value=='regional_pop_dpd_nationality'){
//            $('input[type="checkbox"][name="regionalNationality"]').each(function () {
//                if ($(this).is(':checked')) {
//                    var val = $(this).val();
//                    tableRows_regionalNationality.each(function () {
//                        var tr = $(this)
//                        var td = tr.find('td:nth-child(2)');
//                        if (td.text()===val){
//                            var tbl_data = tr.find('td')
//                            if (tbl_data.length > 1) {
//                                //var data_values=[]
//                                data_regionalNationality[i++]={
//                                    id:tbl_data[0].textContent,
//                                    Region:tbl_data[1].textContent,
//                                    Capital:tbl_data[2].textContent,
//                                    Total:tbl_data[3].textContent,
//                                    per_by_birth:tbl_data[4].textContent,
//                                    per_by_naturalisation:tbl_data[5].textContent,
//                                    per_by_non_ghn:tbl_data[6].textContent,
//                                    By_Birth:tbl_data[7].textContent,
//                                    By_Naturalisation:tbl_data[8].textContent,
//                                    Non_Ghanaian:tbl_data[9].textContent
//                                }
//                            }
//                        }
//                    })
//                }
//            })
//            console.log(data_regionalNationality)
//        }
//            else if(regional_value=='regional_pop_dpd_rel_aff'){
//            $('input[type="checkbox"][name="regionalReligiousAfilliation"]').each(function () {
//                if ($(this).is(':checked')) {
//                    var val = $(this).val();
//                    tableRows_regional_relAffiliation.each(function () {
//                        var tr = $(this)
//                        var td = tr.find('td:nth-child(2)');
//                        if (td.text()===val){
//                            var tbl_data = tr.find('td')
//                            if (tbl_data.length > 1) {
//                                //var data_values=[]
//                                data_relAffiliation[i++]={
//                                    id:tbl_data[0].textContent,
//                                    Region:tbl_data[1].textContent,
//                                    Total:tbl_data[2].textContent,
//                                    per_no_religion:tbl_data[3].textContent,
//                                    per_catholic:tbl_data[4].textContent,
//                                    per_protestine:tbl_data[5].textContent,
//                                    per_pent_or_charistmat:tbl_data[6].textContent,
//                                    per_other_christian:tbl_data[7].textContent,
//                                    per_islam:tbl_data[8].textContent,
//                                    per_traditionalist:tbl_data[9].textContent,
//                                    per_other:tbl_data[10].textContent,
//                                    pop_no_religion:tbl_data[11].textContent,
//                                    pop_catholic:tbl_data[12].textContent,
//                                    pop_protestine:tbl_data[13].textContent,
//                                    pop_pent_or_charistmat:tbl_data[14].textContent,
//                                    pop_other_christian:tbl_data[15].textContent,
//                                    pop_islam:tbl_data[16].textContent,
//                                    pop_traditionalist:tbl_data[17].textContent,
//                                    pop_other:tbl_data[18].textContent
//                                }
//                            }
//                        }
//                    })
//                }
//            })
//            console.log(data_relAffiliation)
//        }
//            else if(regional_value=='regional_pop_dpd_ethnicity'){
//            $('input[type="checkbox"][name="regionalEthnicity"]').each(function () {
//                if ($(this).is(':checked')) {
//                    var val = $(this).val();
//                    tableRows_regionalEthnicity.each(function () {
//                        var tr = $(this)
//                        var td = tr.find('td:nth-child(2)');
//                        if (td.text()===val){
//                            var tbl_data = tr.find('td')
//                            if (tbl_data.length > 1) {
//                                //var data_values=[]
//                                data_regionalEthnicity[i++]={
//                                    id:tbl_data[0].textContent,
//                                    Region:tbl_data[1].textContent,
//                                    Total:tbl_data[2].textContent,
//                                    per_akan:tbl_data[3].textContent,
//                                    per_ga_dangme:tbl_data[4].textContent,
//                                    per_ewe:tbl_data[5].textContent,
//                                    per_guan:tbl_data[6].textContent,
//                                    per_gurma:tbl_data[7].textContent,
//                                    per_mole_dagbani:tbl_data[8].textContent,
//                                    per_grusi:tbl_data[9].textContent,
//                                    per_mande:tbl_data[10].textContent,
//                                    per_other:tbl_data[11].textContent,
//                                    pop_akan:tbl_data[12].textContent,
//                                    pop_ga_dangme:tbl_data[13].textContent,
//                                    pop_ewe:tbl_data[14].textContent,
//                                    pop_guan:tbl_data[15].textContent,
//                                    pop_gurma:tbl_data[16].textContent,
//                                    pop_mole_dagbani:tbl_data[17].textContent,
//                                    pop_grusi:tbl_data[18].textContent,
//                                    pop_mande:tbl_data[19].textContent,
//                                    pop_other:tbl_data[20].textContent
//                                }
//                            }
//                        }
//                    })
//                }
//            })
//            console.log(data_regionalEthnicity)
//        }
//            else{
//        }
//})

//$('input[type="checkbox"][name="regional"]').on('change', getData)
//$('input[type="checkbox"][name="regionalAgegroup"]').on('change', getData)
//$('input[type="checkbox"][name="regionalNationality"]').on('change', getData)
//$('input[type="checkbox"][name="regionalReligiousAfilliation"]').on('change', getData)
//$('input[type="checkbox"][name="regionalEthnicity"]').on('change', getData)
//getData()
