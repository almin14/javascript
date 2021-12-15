
$(document).ready(function(){
	var st = setInterval(function(){
	$.ajax({
		url:"page.php",
		type:"POST",
		success:function(res){
			console.log(res);
			$("p").text("Hello world!");
			console.log("hii");
		}
	});
	},2000);
	$("#bt1").on("click",function(){
		clearInterval(st);
	});
	$("#bt2").on("click",function(){
		var st1 = setInterval(function(){
		$.ajax({
		url:"page.php",
		type:"POST",
		success:function(res){
			console.log(res);
			$("p").text("Hello world!");
			console.log("hii");
		}
	});

	},2000);
		$("#bt1").on("click",function(){
		clearInterval(st1);
	});
	});
});