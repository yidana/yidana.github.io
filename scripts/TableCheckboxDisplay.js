$(document).ready(function () {
    var filter_magic = function (e) {
        var tableRows = $('#regional-table tr:not(:first)');
        tableRows.hide();
        var showAll = true;
        $('input[type="checkbox"][name="regional"]').each(function () {
            if ($(this).is(':checked')) {
                var val = $(this).val();
                tableRows.each(function () {
                    var tr = $(this);
                    var td = tr.find('td:nth-child(2)');
                    if (td.text() === val) {
                        tr.show();
                        showAll = false;
                    }
                });
            }
        });
        if (showAll) {
            tableRows.show();
        }
    };

    $('input[type="checkbox"][name="regional"]').on('change', filter_magic);
    filter_magic();
});

//function filter_type(box) {
//    var cbs = $('input[type="checkbox"][name="filter"]');
//    var all_checked_types = [];
//    for (var i = 0; i < cbs.length; i++) {
//        if (cbs[i].type == "checkbox") {
//            if (cbs[i].name.match(/^filter/)) {
//                if (cbs[i].checked) {
//                    all_checked_types.push(cbs[i].value);
//                }
//            }
//        }
//    }
//    if (all_checked_types.length > 0) {
//        $('#example tr').each(function (i, row) {
//            var $tds = $(this).find('td')
//            if ($tds.length) {
//                var type = $tds[1].innerText;
//                console.log(type)
//                if (!(type && all_checked_types.indexOf(type) >= 0)) {
//                    $(this).hide();
//                }
//                else {
//                    $(this).show();
//                }
//            }
//        });

//    }
//    else {
//        $('#example tr').each(function (i, row) {
//            var $tds = $(this).find('td'),
//            type = $tds.eq(2).text();
//            $(this).show();
//        });
//    }
//    return true;
//}
