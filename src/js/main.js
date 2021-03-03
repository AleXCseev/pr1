$(function () {
    Date.prototype.daysInMonth = function () {
        return 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();
    };

    function getDate(plusDays) {
        var today = new Date();
        var dd = String(today.getDate() + plusDays).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();
        var currentDaysInMonth = new Date().daysInMonth()
        if (+dd > currentDaysInMonth) {
            dd = String(dd - currentDaysInMonth).padStart(2, '0');
            mm++
        }
        return dd + "." + mm + "." + yyyy
    }

    $(".time").text(getDate(2));

    function animateBoots() {
        $(".main-info__img").each(function () {
            $(this).removeClass("active");
        })
        $(".main-info__btn").each(function () {
            $(this).removeClass("active");
        })
    }

    function buttonsHandler() {
        $(".main-info__btn").click(function (e) {
            animateBoots()
            if ($(this).hasClass("btn__black")) {
                $(".main-info__img.black").addClass("active");
                $(".main-info__btn.btn__black").addClass("active")
            }
            if ($(this).hasClass("btn__white")) {
                $(".main-info__img.white").addClass("active");
                $(".main-info__btn.btn__white").addClass("active")
            }
        })
    }

    buttonsHandler()


    $("body").on('click', '[href*="#"]', function (e) {
        var fixed_offset = 0;
        $('html,body')
            .stop()
            .animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
        e.preventDefault();
    });

    function switchBtns(selector) {
        $(selector + " .card__btn").click(function () {
            $(selector + " .card__btn").each(function () {
                $(this).removeClass("active");
                $(this).siblings("span").removeClass("active")
            })
            $(this).addClass("active");
            $(this).siblings("span").addClass("active")
        })
    }

    switchBtns(".card__1");
    switchBtns(".card__2");
    switchBtns(".card__3");

    function galary(selector) {
        var mainImgSelector = selector + " .galary__main img";
        var galaryFototsSelector = selector + " .galary__fotos img";
        var fancyBoxSelector = selector + " .galary__main a";
        $(galaryFototsSelector).click(function () {
            $(mainImgSelector)
                .hide()
                .attr("src", $(this).attr("src"))
                .fadeIn(1000);
            $(fancyBoxSelector).attr("href", $(mainImgSelector).attr("src"))
        })

        function toggleDataSrcAtribute(string) {
            $(mainImgSelector)
                .hide()
                .attr("src", $(mainImgSelector).attr("data-" + string))
                .fadeIn(1000)
            $(fancyBoxSelector).attr("href", $(mainImgSelector).attr("src"))
            $(galaryFototsSelector).each(function () {
                $(this)
                    .hide()
                    .attr("src", $(this).attr("data-" + string))
                    .fadeIn(1000)
            })
        }

        $(selector + " .btn__color").click(function () {
            $(selector + " .btn__color").each(function () {
                $(this).removeClass("active");
            })
            $(this).addClass("active");
            if ($(this).hasClass("white")) {
                toggleDataSrcAtribute("white")
            }
            if ($(this).hasClass("black")) {
                toggleDataSrcAtribute("black")
            }
        })
    }

    galary(".card__1")
    galary(".card__2")
    galary(".card__3")
})

