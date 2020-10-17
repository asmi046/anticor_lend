$(function () {
    let $burgerBtn = $('.burger-btn');
    let $headerMenu = $('.main-menu');
    let closeMenuBtn = $('.close-main-menu');

    $burgerBtn.bind('click', function (e) {
        e.preventDefault();
        $headerMenu.addClass('show-menu');
    });
    closeMenuBtn.bind('click', function (e) {
        e.preventDefault();
        $headerMenu.removeClass('show-menu');
    });

    $('.car__sl').slick({
        centerMode: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        appendDots: $('.car__sl__dots'),
        prevArrow: '.car__sl__arr__prev',
        nextArrow: '.car__sl__arr__next',
        responsive: [
            {
                breakpoint: 999,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                }
            }
         ],
    });

    $('.service-sl').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
//        fade: true,
        appendDots: $('.service-sl__dots'),
        prevArrow: '.service-sl__arr__prev',
        nextArrow: '.service-sl__arr__next',
    });

// ------------add tabs--------
         // Tabs
    $('.avto-tab__control__btn').bind('click', function(e){
        e.preventDefault();
    });
    

    
    let $carConrtolElements = $('.car-services .avto-tab__control__item');
    let $carDisplayElements = $('.car-services ul'); 
    let $truckConrtolElements = $('.truck-services .avto-tab__control__item');
    let $truckDisplayElements = $('.truck-services ul');
    let mainWidtSize = 459;
    
//    функция забирает из экрана элементы с ценами, раздает их по элементам контроллерам
    function distributeItems(master, guets){  
        if(!(master.find('ul').length)){ 
                master.removeClass('active');
                master.each(function(index){
                let taxi = guets.eq(index).removeClass('active').hide().detach();
                $(this).append(taxi); 
                });
            console.log('Убираем яйца из корзины, раздают нуждающимся');
           }  
    } 
// функция забирает элементы с ценами у элементов контроллеров и помещает их в экране
    function pickUpItem(master, guets){
        if(master.find('ul').length){
            
            let taxi;
            taxi = master.children('ul').removeAttr('style');
            master.eq(0).addClass('active');;
            taxi.eq(0).addClass('active');
            master.parent().next().append(taxi);
            console.log('размещаем яйца по корзинам');
        }
        else{ 
        }
        
    }
    
    if($(window).outerWidth() < mainWidtSize){
        distributeItems($carConrtolElements, $carDisplayElements);
        distributeItems($truckConrtolElements, $truckDisplayElements);
    }
    
    $(window).bind('resize', function(){
        if($(window).outerWidth() < mainWidtSize){  
            distributeItems($carConrtolElements, $carDisplayElements);
            distributeItems($truckConrtolElements, $truckDisplayElements);
        }  
        else{
           pickUpItem($carConrtolElements, $carDisplayElements);
            pickUpItem($truckConrtolElements, $truckDisplayElements);
        }
    });
    
//    первый таб
    $carConrtolElements.bind('click', function(e){  
        if($(window).outerWidth() > mainWidtSize){
            let currentIndex = $(this).index();
            $(this).siblings().removeClass('active');
            $(this).addClass('active'); 
            let $displayElementsLevel = $(this).parent().next().children();
            $displayElementsLevel.removeClass('active');
            $displayElementsLevel.eq(currentIndex).addClass('active'); 
        }else{
            $(this).toggleClass('active');
            $(this).children('ul').slideToggle(200);
        }
        
    });
    

//    второй таб
    $truckConrtolElements.bind('click', function(e){  
        if($(window).outerWidth() > mainWidtSize){
            let currentIndex = $(this).index();
            $(this).siblings().removeClass('active');
            $(this).addClass('active'); 
            let $displayElementsLevel = $(this).parent().next().children();
            $displayElementsLevel.removeClass('active');
            $displayElementsLevel.eq(currentIndex).addClass('active'); 
        }else{
            $(this).toggleClass('active');
            $(this).children('ul').slideToggle(200);
        }

    });

});
