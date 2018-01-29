$("#blue").click(function(){
	$("#out").css("background-color", "blue");
});

$("#red").click(function(){
	$("#out").css("background-color", "red");
});

$("#a10").click(function(){
	var currentCount = $("#out").text();
	currentCount = parseInt(currentCount) + 10;
	$("#out").text(currentCount)
});

$("#a20").click(function(){
	var currentCount = $("#out").text();
	currentCount = parseInt(currentCount) + 20;
	$("#out").text(currentCount)
});

$("#a30").click(function(){
	var currentCount = $("#out").text();
	currentCount = parseInt(currentCount) + 30;
	$("#out").text(currentCount)
});

$("#n10").click(function(){
	var currentCount = $("#out").text();
	currentCount = parseInt(currentCount) - 10 ;
	$("#out").text(currentCount)
});

$("#n20").click(function(){
	var currentCount = $("#out").text();
	currentCount = parseInt(currentCount) - 20 ;
	$("#out").text(currentCount)
});

$("#n30").click(function(){
	var currentCount = $("#out").text();
	currentCount = parseInt(currentCount) - 30 ;
	$("#out").text(currentCount)
});