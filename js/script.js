/*global $, console, jQuery*/

$(function () {
    'use strict';
    
    //Adjust Header Height
    var myHeader = $('.header'),
        
        mySlider = $('.bxslider'),
    
        scrollButton = $("#scroll-top"),
        
        scrollLink = $('.scroll');
    
    myHeader.height($(window).height());
    
    $(window).resize(function () {
        myHeader.height($(window).height());
        
        //Adjust BxSlider List Item Center
        mySlider.each(function () {
            $(this).css('padding-top', ($(window).height() - $('.bxslider li').height()) / 2);
        });
    });
    
    
    //Add Fixed Navbar On Scroll
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        
        if (scroll >= 50) {
            $('.navbar.navbar-inverse').css({
                position: 'fixed',
                backgroundColor: '#333',
                borderBottom: '3px solid #1abc9c'
            });
        } else {
            $('.navbar.navbar-inverse').css({
                position: 'absolute',
                background: 'none',
                borderBottom: 'none'
            });
        }
    });
    
    
    //Smooth Scroll To Div
    function goToByScroll(id) {
        $('html,body').animate({
            scrollTop: $(id).offset().top
        }, 'slow');
    }
    
    // Click On Brand To Scroll To Top
    $('.navbar-brand').on('click', function () {
        $('.links li a').each(function () {
            $(this).removeClass('active');
        });
        
        goToByScroll('#home');
        return false;
    });
    
    
    // Show Scroll To Top Button
    $(window).scroll(function () {
        
        if ($(this).scrollTop() >= $('.services').offset().top - 60) {
            scrollButton.fadeIn();
        } else {
            scrollButton.fadeOut();
        }
    });
    
    
    // Click On Scroll To Top Button
    scrollButton.click(function () {
        $('.links li a').each(function () {
            $(this).removeClass('active');
        });
        goToByScroll('#home');
        return false;
    });
    
    
    
    // Add Active Class On Links
    $('.links li a').on('click', function () {
        $(this).parent().addClass('active').siblings().removeClass('active');
        var href = $(this).attr('href');
        
        goToByScroll(href);
        return false;
    });
    
    
    
    //Trigger The BxSlider
    mySlider.bxSlider({
        pager: false
    });
    
    //Adjust BxSlider List Item Center
    mySlider.each(function () {
        $(this).css('padding-top', ($(window).height() - $('.bxslider li').height()) / 2);
    });
    
    
    /*
    $('.links li a').on('click', function () {
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 1000);
    });
    */
    
    
    
    $(window).scroll(function () {
        var scrollBarLocation = $(this).scrollTop();
        var scrollBarLocationbtm = $(this).scrollTop() + $(window).height();
        
        
        ////Active Link Switching When Scrolling
        scrollLink.each(function () {
            var sectionOffset = $(this.hash).offset().top - 20;
            var sectionOffsetbtm = $(this.hash).offset().top + $(this.hash).height();
            
            if (sectionOffset <= scrollBarLocation || scrollBarLocationbtm >= sectionOffsetbtm) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        });
        
    });
    
    
    
    //Our Auto Slider Code
    (function autoSlider() {
        $('.slider .active').each(function () {
            if (!$(this).is(':last-child')) {
                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass('active').next().addClass('active').fadeIn();
                    autoSlider(); // Self Invoke Function
                });
                
            } else { // For Last Child
                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass('active');
                    $('.slider div').eq(0).addClass('active').fadeIn();
                    autoSlider();
                });
            }
        });
    }());
    
    
    
    //Trigger MixitUp
    $('#Container').mixItUp();
    
    //Adjust Shuffle Links
    $('.shuffle li').click(function () {
        $(this).addClass('selected').siblings().removeClass('selected');
    });
    
    /*
    //Trigger Nice Scroll
    $('html').niceScroll({
        cursorcolor: '#1abc9c',
        cursorwidth: '10px',
        cursorborder: '1px solid #1abc9c',
        cursorborderradius: 0
    });
    */
    
});