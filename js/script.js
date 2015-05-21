$(function() {
    $('.footnoteRef').each(function(){
		var number = $(this).find('sup').html();
		var footnote = $(this).closest(".essay").find("#fn"+ number);
		var footnoteContent=footnote.html();
		footnote.remove();
		$(this).append("<span class='footnote-tooltip'>"+footnoteContent+"</span>");
	})	
	$('.toggle-menu').click(function(){
		$('nav.index').toggleClass('open');
	})
});