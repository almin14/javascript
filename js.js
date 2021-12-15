
$(document).ready(function(){
	setInterval(function(){
	$.ajax({
		url:"page.php",
		type:"POST",
		success:function(){
			$("p").text("Hello world!");
			console.log("hii");
		}
	});
	},60000);
});