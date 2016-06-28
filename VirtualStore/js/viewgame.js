$(document).ready(function()
{
	var game = sessionStorage.getItem('game');

	$("#front_image").attr("src", "images/" + game + "/front.jpg");

	$("#img1").attr("src", "images/" + game + "/1.jpg");
	$("#img2").attr("src", "images/" + game + "/2.jpg");
	$("#img3").attr("src", "images/" + game + "/3.jpg");
	$("#img4").attr("src", "images/" + game + "/4.jpg");
});


$("#my_slide").cycle({ 
    fx:     'scrollLeft', 
    speed:  1500, 
    next:   '#my_slide', 
    timeout: 0 
});
