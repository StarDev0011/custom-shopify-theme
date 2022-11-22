function splide_slider () {
    if($("#ImageAccordions").length>0) {
        if($(window).width()<500){
            $("#ImageAccordions").addClass("splide");
            $("#ImageAccordions .wrapper").addClass("splide__track");
            $("#ImageAccordions .wrapper .image-accordions").addClass("splide__list");
            $("#ImageAccordions .wrapper .image-accordions .image-accordion").addClass("splide__slide");
            var splide = new Splide('.splide', {
                direction: 'ttb',
                height: '80vh',
            });
            
            splide.mount();
        }
        else{
            $("#ImageAccordions").removeClass("splide");
            $("#ImageAccordions .wrapper").removeClass("splide__track");
            $("#ImageAccordions .wrapper .image-accordions").removeClass("splide__list");
            $("#ImageAccordions .wrapper .image-accordions .image-accordion").removeClass("splide__slide");
        }
    }   
}

jQuery(document).ready(function($) {
    console.log("Multi Brand")
    splide_slider();
    $(window).resize(function(){
        splide_slider();
    })
    if(window.location.href.split('/')[4] == 'what-is-facewater' || window.location.href.split('/')[3] == 'products' || window.location.href.split('/')[5] == 'products') {
        $(".column__item__text").each(function(){
            var outerheight = $(this).outerHeight()
            var scrollheight = $(this).prop("scrollHeight")
            if(outerheight <= scrollheight) {
                $(this).css("margin-bottom", "5px")
                $(this).parent().children(".read_more").show()
                $(this).parent().parent().css("margin-bottom", "30px")
            }
        })
        $(".read_more").each(function(){
            $(this).click(function(){
                $(this).parent().children(".column__item__text.rte").css("-webkit-line-clamp","initial")
                $(this).hide()
                $(this).parent().children(".read_less").show()
            })
        })
        $(".read_less").each(function(){
            $(this).click(function(){
                $(this).parent().children(".column__item__text.rte").css("-webkit-line-clamp","4")
                $(this).hide()
                $(this).parent().children(".read_more").show()
            })
        })
    }
    else {
        $(".column__item__text.rte").each(function() {
            $(this).css("-webkit-line-clamp","initial")
        })
    }
    $(window).scroll(function(){
        var headerHeight = $(".site-header").height();
        var announcementHeight = $("#shopify-section-announcement-bar").height();
        var pageOffset = headerHeight + announcementHeight;
        var currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if(currentScrollTop > pageOffset) {
            $("#oilwaters #shopify-section-header").addClass("header--sticky")
            $("#oilwaters").addClass("has-scrolled")
        }
        else {
            $("#oilwaters #shopify-section-header").removeClass("header--sticky")
            $("#oilwaters").removeClass("has-scrolled")
        }
    })

    $(".breaking p").each(function() {
        $(this).append("<br>");
    })
    setInterval(() => {
        $.ajax({
            type: "get",
            url: "/cart.js",
            dataType: "json",
            success: function (response) {
                var count = response.item_count
                $('#cart-drawer .cart__item__info .cart_item_collections').each(function(){
                    if($(this).text().indexOf("travel-size-minis") != -1) {
                        count = count - $(this).parents(".cart__item__content").find("input").attr('value')
                    }
                })
                if(count > 1){
                    $("#cart-drawer .cart__message").text("congratulations! your order qualifies for free shipping")
                }
                else if(count == 1) {
                    $("#cart-drawer .cart__message").text("you are 1 item away from free shipping")
                }
                else if(count == 0) {
                    $("#cart-drawer .cart__message").text("FREE SHIPPING WHEN YOU ORDER ANY 2 FULL SIZE ITEMS")
                }
            }
        });
    }, 500);
})

