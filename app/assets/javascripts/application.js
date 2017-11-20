// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .
//= require jquery
//= require bootstrap-sprockets

// $(document).ready(showLetter);
// var imgsArray = ["A1", "C1", "F1", "J1", "K1", "L1", "S1", "Ñ1"];
//
// function generateRandomForArray() {
//     var num = Math.floor(Math.random() * 8);
//     return num;
// }
//
// function generateRandom() {
//     var num = Math.floor(Math.random() * 400);
//     return num;
// }
//
// function showLetter() {
//     var letter = imgsArray[generateRandomForArray()];
//     $("div").append("<img src='imgs/" + letter + ".png'>");
//     var left = generateRandom();
//     var top = generateRandom();
//     $("div").last().css({"position":"absolute", "top": top + "px", "left": left + "px"});
// }

$(".face").on("click", function() {
   $('#imagepreview').attr('src', $('post.image.url').attr('src')); // here asign the image to the modal when the user click the enlarge link
   $('#imagemodal').modal('show'); // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
});
