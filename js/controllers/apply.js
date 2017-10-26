app.controller('ApplicationController', ['$scope', '$http', function (scope, http) {

    var page = 'one';

    $('#show-page1').on('click', showPage1);
    $('#show-page2').on('click', showPage2);
    $('#show-page3').on('click', showPage3);
    $('.next').on('click', showNextPage);
    $('.prev').on('click', showPrevPage);

}]);

function showPage1() {
    page = 'one';

    $('#page1').show();
    $('#page2, #page3').hide();

    $(this).addClass('active').css('cursor', 'text');
    $('#show-page2, #show-page3').removeClass('active').css('cursor', 'pointer');
}
function showPage2() {
    page = 'two';

    $('#page2').show();
    $('#page1, #page3').hide();

    $(this).addClass('active').css('cursor', 'text');
    $('#show-page1, #show-page3').removeClass('active').css('cursor', 'pointer');
}
function showPage3() {
    page = 'three';

    $('#page3').show();
    $('#page1, #page2').hide();

    $(this).addClass('active').css('cursor', 'text');
    $('#show-page1, #show-page2').removeClass('active').css('cursor', 'pointer');
}

function showNextPage() {

    if (page == 'one') {
        showPage2();
    }
    else if (page == 'two') {
        showPage3();
    }

}
function showPrevPage() {

    if (page == 'three') {
        showPage2();
    }
    else if (page == 'two') {
        showPage1();
    }
}