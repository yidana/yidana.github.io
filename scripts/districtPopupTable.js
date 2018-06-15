$(document).ready(function () {
    $('#district-popup-table').DataTable({
        "columns": [
            { "data": "No." },
            { "data": "District" },
        //     { "data": "Capita" },
        //     { "data": "Total" },
        //     { "data": "Male" },
        //     { "data": "Female" },
        //     { "data": "Region" },
        ],
        //"lengthMenu": [[-1, 50, 25, 10], ["All", 50, 25, 10]],
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print','colvis'
        ],
        select: true
    });
});