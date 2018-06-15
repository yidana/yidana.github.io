$(document).ready(function () {
    $('#regional-nationality-table').DataTable({
        "columns": [
            { "data": "No." },
            { "data": "Region" },
            { "data": "Capital" },
            { "data": "Total" },
            { "data": "% By Birth" },
            { "data": "% By Naturalisation" },
            { "data": "% Non Ghanaian" },
            { "data": "By Birth" },
            { "data": "By Naturalisation" },
            { "data": "Non Ghanaian" },
        ],
        "lengthMenu": [[-1, 50, 25, 10], ["All", 50, 25, 10]],
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print','colvis'
        ],
        select: true
    });
});