$.fn.dataTable.ext.search.push(
    function( settings, data, dataIndex ) {
        var min = parseInt( $('#min-dist-agegroup').val(), 10 );
        var max = parseInt( $('#max-dist-agegroup').val(), 10 );
        var tot_pop = parseFloat( data[3] ) || 0; // use data for the age column

        if ( ( isNaN( min ) && isNaN( max ) ) ||
             ( isNaN( min ) && tot_pop <= max ) ||
             ( min <= tot_pop   && isNaN( max ) ) ||
             ( min <= tot_pop   && tot_pop <= max ) )
        {
            return true;
        }
        return false;
    }
);

$(document).ready(function() {
    var table = $('#district-agegroup-table').DataTable();

    // Event listener to the two range filtering inputs to redraw on input
    $('#min-dist-agegroup, #max-dist-agegroup').keyup( function() {
        table.draw();
    } );
} );