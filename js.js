
$(document).ready(function(){
	setInterval(function(){
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
});