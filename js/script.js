// slide

$(document).ready(function () {
    $('.slick_gallery').slick({
        arrows : true,
        dots: true, // 슬라이드로 가는 동그라미
        autoplay: true, // 자동으로 슬라이드를 넘겨줌
        infinite: true, // 무한 반복
        slidesToScroll: 1, // 넘겨질 슬라이드 수
    });
});

$(function(){
    $('.tab_content > table').hide();
    $('.tabNav a').click(function () {
        $('.tab_content > table').hide().filter(this.hash).fadeIn();
        $('.tabNav a').removeClass('active');
        $(this).addClass('active');
        return false;
    }).filter(':eq(0)').click();
});

$(document).ready(function(){

$("#scrollTop").hide(); // 탑 버튼 숨김
$(window).scroll(function() { 
    if ($(this).scrollTop() > 200) { 
    $('#scrollTop').fadeIn(200); } 
    else { $('#scrollTop').fadeOut(300); } 
});
// 조건문 - 스크롤을 500px 만큼 내렸을 때, 
// if - 스크롤 위치가 500 보다 크면 스크롤 바를 나타나게 하고 
// else - 그렇지 않으면 스크롤 바를 사라지게 해라

$("#scrollTop").click(function(){
    console.log("click");
    $('html, body').animate({scrollTop: 0}, 700 );
});
});