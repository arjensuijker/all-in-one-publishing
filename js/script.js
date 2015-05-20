$(function() {
    $('.footnoteRef').each(function(){
		var number = $(this).find('sup').html();
		var footnote = $(this).closest(".essay").find("#fn"+ number);
		var footnoteContent=footnote.html();
		console.log(footnoteContent);
		footnote.remove();
		$(this).append("<span class='footnote-tooltip'>"+footnoteContent+"</span>");
	})	
});