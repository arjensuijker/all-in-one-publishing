$(function() {
    $('.footnoteRef').each(function(){
		var number = $(this).find('sup').html();
		var footnoteContent=$("#fn"+ number + " p").html();
		console.log(footnoteContent);
		$("#fn"+ number).remove();
		$(this).append("<span class='footnote-tooltip'>"+footnoteContent+"</span>");
	})	
});