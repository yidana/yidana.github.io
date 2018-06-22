$(document).ready(function () {
    $('#regional-nationality-table').DataTable({
        "ajax":"/Json/Regional_nationality.json",
        "columns": [
            { "data": "Region" },
            { "data": "Capital" },
            { "data": "Total" },
            { "data": "by_birth" },
            { "data": "by_naturalisation" },
            { "data": "non_Ghanaian" },
            { "data": "by_birth_population" },
            { "data": "by_Naturalisation_population" },
            { "data": "Non_Ghanaian_population" },
        ],
        "lengthMenu": [[-1, 50, 25, 10], ["All", 50, 25, 10]],
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print','colvis'
        ],
        select: true
    });
});