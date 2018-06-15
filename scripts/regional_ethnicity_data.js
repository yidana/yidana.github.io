$(document).ready(function () {
    $('#regional-ethnicity-table').DataTable({
        "columns": [
            { "data": "No." },
            { "data": "Region" },
            { "data": "Capital" },
            { "data": "Total" },
            { "data": "% Akan" },
            { "data": "% Ga-Dangme" },
            { "data": "% Ewe" },
            { "data": "% Guan" },
            { "data": "% Gurma" },
            { "data": "% Mole Dagbani" },
            { "data": "% Grusi" },
            { "data": "% Mande" },
            { "data": "% Other" },
            { "data": "Akan" },
            { "data": "Ga-Dangbe" },
            { "data": "Ewe" },
            { "data": "Guan" },
            { "data": "Gurma" },
            { "data": "Mole Dagbani" },
            { "data": "Grusi" },
            { "data": "Mande" },
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