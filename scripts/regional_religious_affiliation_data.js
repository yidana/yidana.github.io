$(document).ready(function () {
    $('#regional-religiousAffiliation-table').DataTable({
        "ajax":"/Json/Regional_relAffiliation.json",
        "columns": [
            { "data": "Region" },
            { "data": "Total" },
            { "data": "per_No_Religion" },
            { "data": "per_Catholic" },
            { "data": "per_Protestant" },
            { "data": "per_Pentecostal_Charismatic" },
            { "data": "per_Other_Christian" },
            { "data": "per_Islam" },
            { "data": "per_Traditionalist" },
            { "data": "per_Other" },
            { "data": "pop_No_Religion" },
            { "data": "pop_Catholic" },
            { "data": "pop_Protestant" },
            { "data": "pop_Pentecostal_Charismatic" },
            { "data": "pop_Other_Christian" },
            { "data": "pop_Islam" },
            { "data": "pop_Traditionalist" },
            { "data": "pop_Other" },
        ],
        "lengthMenu": [[-1, 50, 25, 10], ["All", 50, 25, 10]],
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print','colvis'
        ],
        select: true
    });
});