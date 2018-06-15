$(document).ready(function () {
    $('#regional-religiousAffiliation-table').DataTable({
        "columns": [
            { "data": "No." },
            { "data": "Region" },
            { "data": "Total" },
            { "data": "% No Religion" },
            { "data": "% Catholic" },
            { "data": "% Protestant" },
            { "data": "% Pentecostal/Charismatic" },
            { "data": "% Other Christian" },
            { "data": "% Islam" },
            { "data": "% Traditionalist" },
            { "data": "% Other" },
            { "data": "No Religion" },
            { "data": "Catholic" },
            { "data": "Protestant" },
            { "data": "Pentecostal/Charismatic" },
            { "data": "Other Christian" },
            { "data": "Islam" },
            { "data": "Traditionalist" },
            { "data": "Other" },
        ],
        "lengthMenu": [[-1, 50, 25, 10], ["All", 50, 25, 10]],
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print','colvis'
        ],
        select: true
    });
});