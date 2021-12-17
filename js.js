
$(document).ready(function(){
	$.ajax({
		url:"page.php",
		type:"POST",
		success:function(res){
			$("p").text(res);		
		}
	});
});