$(document).ready(function() {
  $('.sidenav').sidenav();
  $('.materialboxed').materialbox();
  $('.parallax').parallax();
  $('.tabs').tabs();
  $('.datepicker').datepicker();
  $('.tooltipped').tooltip();
  $('.scrollspy').scrollSpy();

 });

 gsap.from(".logo", { opacity: 0, duration: 1, delay: 0.5, y: -10 });
 gsap.from(".hamburger", { opacity: 0, duration: 1, delay: 1, x: 20 });
 gsap.from(".hero-img", { opacity: 0, duration: 1, delay: 1.5, x: -200 });
 gsap.from(".hero-content h2", { opacity: 0, duration: 1, delay: 2, y: -50 });
 gsap.from(".hero-content h1", { opacity: 0, duration: 1, delay: 2.5, y: -45 });
 gsap.from(".hero-content a", { opacity: 0, duration: 1, delay: 3.5, y: 50 });

(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space


