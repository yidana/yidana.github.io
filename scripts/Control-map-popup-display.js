$(document).ready(function(){
    //$('#display-popup').hide();
    //$('#dark-background').hide();
     $('click','.trigger_popup_fricc',function(){
       $('.hover_bkgr_fricc').show();
    });
    $('.hover_bkgr_fricc').click(function(){
        $('.hover_bkgr_fricc').hide();
    });
    $('.popupCloseButton').click(function(){
        $('.hover_bkgr_fricc').hide();
    });
});