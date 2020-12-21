



$(".input-cart-number").on("keyup change", function() {
    if($(this).val().length >= 4) {
        $(this).next().focus();
    }
    if ($(this).val().length < 1) {
        $(this).prev().focus();
    }

    $(this).val($(this).val().replace(/[A-Za-zА-Яа-яЁё]/, ''))

    let index = $(this).index();
    $(`.number span:nth-child(${index})`).text($(this).val());

    if ($(this).index() === 4 && $(this).val().length >= 4) {
        $("#card-holder").focus();
    }
});

$("#card-holder").on("keyup change", function() {
    $(".card-holder div").text($(this).val());
});


$("#card-expiration-month").on("change", function() {
    $(".month").text($(this).val() + "/");
});

$("#card-expiration-year").on("change", function() {
    $(".year").text($(this).val());
});

$("#card-ccv").on("focus", function() {
    $(".credit-card-box").addClass("hover");
}).on("blur", function() {
    $(".credit-card-box").removeClass("hover");
}).on("change keyup", function() {
    $(".ccv div").text($(this).val());
});