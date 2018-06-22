/* Custom filtering function which will search data in column four between two values */

$(document).ready(function () {

$('#district-agegroup-table').DataTable({
"ajax":"/Json/District_agegroup.json",
        "columns": [
            { "data": "Districts" },
            { "data": "Capital" },
            { "data": "Total_Population" },
            { "data": "Male" },
            { "data": "Female" },
            { "data": "Ages_0_14_total" },
            { "data": "Ages_0_14_male" },
            { "data": "Ages_0_14_female" },
            { "data": "Ages_15_64_total" },
            { "data": "Ages_15_64_male" },
            { "data": "Ages_15_64_female" },
            { "data": "Ages_65_+_total" },
            { "data": "Ages_65_+_male" },
            { "data": "Ages_65_+_female" },
            { "data": "Region" },
        ],
        "lengthMenu": [[-1, 50,25, 10 ], ["All",  50,25,10 ]],
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print','colvis'
        ],
        select: true
    });

});
