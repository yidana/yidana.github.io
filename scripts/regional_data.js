$(document).ready(function () {
    $('#regional-table').DataTable({
        "columns": [
            { "data": "No." },
            { "data": "Region" },
            { "data": "Capital" },
            { "data": "Total" },
            { "data": "Male" },
            { "data": "Female" },
        ],
        "lengthMenu": [[-1, 50, 25, 10], ["All", 50, 25, 10]],
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print','colvis'
        ],
        select: true
    });
});