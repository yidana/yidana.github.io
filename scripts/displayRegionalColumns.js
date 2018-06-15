//$(document).ready(function () {
//    //$("input:checkbox:not(:checked)")
    
//    $('input[type="checkbox"][name = "district-header"]:not(:checked)').each(function () {
//        var column = "table ." + $(this).attr("class");
//        $(column).show();
//    });

//    $('input[type="checkbox"][name = "district-header"]').click(function () {
//        var column = "table ." + $(this).attr("class");
//        $(column).toggle();
//    });
//})

$(document).ready(function () {
    var $chk = $('input[type="checkbox"][name = "regional-checkbox"]');
    var $tbl = $("#regional-table");
    var $tblhead = $("#regional-table th");
    $chk.prop('checked', true);
    $chk.click(function () {
        var colToHide = $tblhead.filter("." + $(this).attr("class"));
        var index = $(colToHide).index();
        $tbl.find('tr :nth-child(' + (index + 1) + ')').toggle();
    });
});
