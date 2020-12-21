const burger = $(".menu-link");
const clos = $(".close-btn");
const link = $("li a");
const menu = $("menu");


burger.click(function() {
    menu.toggleClass("active-menu");
});

clos.click(function() {
    menu.toggleClass("active-menu");
});

link.on("click", function(e) {
    e.preventDefault();
    const id = $(this).attr("href");
    const top = $(id).offset().top;
    $("html, body").animate({scrollTop: top}, 1000);
});
