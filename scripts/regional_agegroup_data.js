$(document).ready(function () {
    $('#regional-agegroup-table').DataTable({
        "ajax":"/Json/Regional_Agegroup.json",
        "columns": [
            { "data": "Region" },
            { "data": "Capital" },
            { "data": "Total" },
            { "data": "Male" },
            { "data": "Female" },
            { "data": "Ages_0_14" },
            { "data": "Ages_15_60" },
            { "data": "Ages_65_abv" },
        ],
        "lengthMenu": [[-1, 50, 25, 10], ["All", 50, 25, 10]],
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print','colvis'
        ],
        select: true
    });
});