$(document).ready(function () {
    $('#example').DataTable({
        "ajax":"/Json/District_Population.json",
            
        "columns": [
            { "data": "District" },
            { "data": "Capital" },
            { "data": "Total_Population" },
            { "data": "Male" },
            { "data": "Female" },
            { "data": "Region" },
        ],
        "lengthMenu": [[-1, 50, 25, 10], ["All", 50, 25, 10]],
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print','colvis'
        ],
        select: true
    });

});