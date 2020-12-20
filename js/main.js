$(document).ready(function () {
    let count = 1;
    let countSlide = $(".slide").length;
    for(let i = 0; i < countSlide; i++) {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        $(".nav").append(dot);
        if (i === 0) {
            dot.classList.add("active");
        }
    }

    function changeDots(i) {
        $(".dot").removeClass("active");
        $(`.dot:eq(${i - 1})`).addClass("active");
    }

    $(".nav").on("click", ".dot", function() {
        $(".dot").removeClass("active");
        $(this).addClass("active");
        let indexBtn = $(this).index();
        if (indexBtn + 1 != count) {
            const chet = -$(".view").height() * indexBtn;
            $(".sliderWrapper").css(`transform`, `translate(0, ${chet}px)`);
            count = indexBtn + 1; 
        }
    });
    
    function next() {
        if (count >= countSlide) {
            $(".sliderWrapper").css("transform", "translate(0, 0)");
            count = 1;
            changeDots(count);
        } else {
            console.log("else");
            const chet = -$(".view").height() * count;
            $(".sliderWrapper").css(`transform`, `translate(0, ${chet}px)`);
            count++; 
            changeDots(count);
        }
    }

    function prev() {
        if (count <= 1) {
            let chet = -$(".view").height() * (countSlide - 1);
            $(".sliderWrapper").css("transform", `translate(0, ${chet}px)`);
            count = countSlide;
            changeDots(count);
        } else {
            const chet = -$(".view").height() * (count - 2);
            $(".sliderWrapper").css(`transform`, `translate(0, ${chet}px)`);
            count--; 
            changeDots(count);
        }
    }
    
    $(".right").on("click", next);
    $(".left").on("click", prev);
});