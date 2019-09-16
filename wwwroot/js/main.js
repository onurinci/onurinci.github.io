/*

	Template Name: Automobile
	Author: Themewinter
	Author URI: https://themeforest.net/user/themewinter
	Description: Automobile
   Version: 1.0
   
   1. Main Slider
   2. Site Search
   
   
  
*/

$(function ($) {
   "use strict";

   /* ---------------------------------------------
                     Menu Toggle 
   ------------------------------------------------ */

   if ($(window).width() < 991) {
      $(".navbar-nav li a").on("click", function () {
         $(this).parent("li").find(".dropdown-menu").slideToggle();
         $(this).find("i").toggleClass("fa-angle-up fa-angle-down");
      });
   }

   /* ---------------------------------------------
                     Site Search 
   ------------------------------------------------ */


   $(".search-link i.icon-cross").on("click", function (event) {
      event.preventDefault()
      $(".search-link i.icon-search").addClass("show");
      $(".search-link form .search-box").removeClass("show");
      $(".search-link i.icon-cross").removeClass("show");
   });
   $(".search-link i.icon-search").on("click", function () {
      $(".search-link i.icon-search").removeClass("show");
      $(".search-link form .search-box").addClass("show");
      $(".search-link i.icon-cross").addClass("show");
   });

   /* post grid image color */
    $(".post-grid-image").each(function() {
        var postcolol = $(this).data('color');
        $(this).css( "background-color", postcolol );      
    });

});