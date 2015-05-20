$(function() {
    $('.footnoteRef').each(function(){
		var number = $(this).find('sup').html();
		var footnoteContent=$("#fn"+ number + " p").html();
		$("#fn"+ number).remove();
		$(this).find(".footnote-tooltip").html(footnoteContent);
	})	
});