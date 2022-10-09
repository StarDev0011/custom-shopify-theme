jQuery(document).ready(function($) {
    if(window.location.href.split('/')[4] == 'what-is-facewater') {
        $(".column__item__text").each(function(){
            var outerheight = $(this).outerHeight()
            var scrollheight = $(this).prop("scrollHeight")
            console.log(outerheight)
            console.log(scrollheight)
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
})
function splide_slider () {
    if($("#ImageAccordions").length>1) {
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
splide_slider();
jQuery(document).ready(function ($) {
    $(window).resize(function(){
        splide_slider();
    })
});

