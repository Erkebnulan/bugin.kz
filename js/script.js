/*поиск в header*/
$('.search-btn').click(function (){
    if ($('.search input').val()==""){
        $('.search').toggleClass('search-uncover');
        $('.header-bottom').toggleClass('null-opacity');
    }

});

/*поиск в header*/
$(document).mouseup(function (e){
    var div = $(".search");  //класс элемента вне которого
    if (!div.is(e.target) && div.has(e.target).length === 0) {
        div.removeClass('search-uncover');
        $('.header-bottom').removeClass('null-opacity');
    }
});

/*header menu для мобильников*/
$('.menu-open-btn').click(function (){
    $('.header-top-wrapper').addClass('menu-open')
});

/*header menu для мобильников*/
$('.menu-close-btn').click(function (){
    $('.header-top-wrapper').removeClass('menu-open')
});






