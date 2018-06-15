    $(function getData(){
        $('#dynamicSelection_agegroup').hide()
        $('#dynamicSelection').hide()
        var data=[]
        //console.log(data)
        var data_dist_agegroup=[]
        var i=0
        var tableRow=$('#example tr:not(:first)')
        var tableRow_dist_agegroup=$('#district-agegroup-table tr:not(:first)')

        //checking which district population data is selected
        $('#selection-district-pop').change(function(){
        var dist_value=$('#selection-district-pop option:selected').val()
            data_dist_agegroup.length=0
            data.length=0
            //var dist_value=$(this).val()
            if (dist_value=='dist_pop'){
                // Show or hide empty dropdowns
                $('#dynamicSelection_agegroup').hide()
                $('#dynamicSelection').show()

                //$('#dynamicSelection').empty()
                //$('input[type="checkbox"][name="filter"]').each(function(){
                //    this.checked=false
                //})
                //console.log('hellooooo')
                $('input[type="checkbox"][name="filter"]').each(function () {
                    //console.log('helooooooo 11111111')

                    //$(this).on('change',function(){
                    if (this.checked) {
                         //console.log('helooooooo 222222')
                        var val = $(this).val();
                        //console.log('helooooooo 222222')

                        tableRow.each(function () {
                            //console.log('table row')
                            var tr = $(this)
                            var td = tr.find('td:nth-child(2)');
                            if (td.text()===val){
                                //console.log('helooooooo 33333')
                                var tbl_data = tr.find('td')
                                //if (tbl_data.length >= 1) {
                                    //var data_values=[]
                                //console.log('helooooooo 4444444444')

                                    data[i++] = {
                                        id: tbl_data[0].textContent,
                                        District: tbl_data[1].textContent,
                                        Capital: tbl_data[2].textContent,
                                        Total: parseInt(tbl_data[3].textContent),
                                        Male: parseInt(tbl_data[4].textContent),
                                        Female: parseInt(tbl_data[5].textContent),
                                        Region: tbl_data[6].textContent
                                    }
                                //}
                            }
                    })
                    }
                })
                $('#display-data').click(function(){
                    console.log(data)
                })
                //console.log(data)
                //$("#dynamicSelection").empty()
                //$.each(options,function(i,p){
                //    $("#dynamicSelection").append($('<option></option>').val(p).html(p))
                //})

                //populate an empty array with item keys in the data array
                var k = 0
                var cols = []
                for (var row in data[1]){
                    cols.push(row)
                }
                //console.log(cols)
                //for (var row in data) {
                //    for (var key in data[row]) {
                //        cols[0] = key
                //    }
                //    break
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
            }
            
            else if (dist_value=='dist_pop_age_group'){
                $('#dynamicSelection_agegroup').show()
                $('#dynamicSelection').hide()
                //$('#dynamicSelection').empty()
                //$('input[type="checkbox"][name="agegroup"]').each(function(){
                //    this.checked=false
                //})
                //console.log('helloooooooooo this is district by agegroup')
                $('input[type="checkbox"][name="agegroup"]').each(function () {
                //$(this).on('change',function(){
                if ($(this).is(':checked')) {
                    var val = $(this).val();
                    tableRow_dist_agegroup.each(function () {
                        var tr = $(this)
                        var td = tr.find('td:nth-child(2)');
                        if (td.text()===val){
                            var tbl_data = tr.find('td')
                              if (tbl_data.length >= 1) {
                            //var data_values=[]
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
                        }
                    })
                }
                //})
                })
                console.log(data_dist_agegroup)
                 //populate an empty array with item keys in the data array
                var k = 0
                var cols = []
                for (var row in data_dist_agegroup[1]){
                    cols.push(row)
                }
                //console.log(cols)
                //for (var row in data) {
                //    for (var key in data[row]) {
                //        cols[0] = key
                //    }
                //    break
                //}

                //populate dropdown list with item keys in the data array
                var select = document.getElementById("dynamicSelection_agegroup")
                for (var j = 0; j < cols.length; j++) {
                    var opt = cols[j]
                    var el = document.createElement("option")
                    el.textContent = opt
                    el.value = opt
                    select.appendChild(el)
                }
            }
            else{
                console.log('helloooooooooo this is new')
                $('input[type="checkbox"][name="filter"]').removeAttr('checked')


            }
    })

    })
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


