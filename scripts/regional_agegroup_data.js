$(document).ready(function () {
    $('#regional-agegroup-table').DataTable({
        "columns": [
            { "data": "No." },
            { "data": "Region" },
            { "data": "Capital" },
            { "data": "Total" },
            { "data": "Male" },
            { "data": "Female" },
            { "data": "Ages 0-14" },
            { "data": "Ages 15-65" },
            { "data": "Ages 65+" },
        ],
        "lengthMenu": [[-1, 50, 25, 10], ["All", 50, 25, 10]],
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print','colvis'
        ],
        select: true
    });
});