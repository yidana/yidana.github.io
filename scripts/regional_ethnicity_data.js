$(document).ready(function () {
    $('#regional-ethnicity-table').DataTable({
        "ajax":"/Json/Regional_ethnicity.json",
        "columns": [
            { "data": "REGION" },
            { "data": "Capital" },
            { "data": "Total" },
            { "data": "Akan" },
            { "data": "Ga_Dangme" },
            { "data": "Ewe" },
            { "data": "Guan" },
            { "data": "Gurma" },
            { "data": "Mole_Dagbani" },
            { "data": "Grusi" },
            { "data": "Mande" },
            { "data": "Other" },
            { "data": "Akan_population" },
            { "data": "Ga_Dangme_population" },
            { "data": "pop_Ewe" },
            { "data": "Guan_population" },
            { "data": "Gurma_population" },
            { "data": "Mole_Dagbani_population" },
            { "data": "Grusi_population" },
            { "data": "Mande_population" },
            { "data": "Other_population" },
        ],
        "lengthMenu": [[-1, 50, 25, 10], ["All", 50, 25, 10]],
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print','colvis'
        ],
        select: true
    });
});