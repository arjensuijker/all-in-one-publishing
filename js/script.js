$(function() {
	$('.footnoteRef').each(function(){
		var number = $(this).find('sup').html();
		var footnote = $(this).closest(".essay").find("#fn"+ number);
		var footnoteContent=footnote.html();
		$(this).append("<span class='footnote-tooltip'>"+footnoteContent+"</span>");
	})	
	$('.footnotes').hide();    
});

var mediaQueryList = window.matchMedia(' print ');
mediaQueryList.addListener(function(mql) {
	console.log('print');
    if (mql.matches) {
		$('.footnotes').show();
		$('.footnote-tooltip').hide();
    }else{
		$('.footnotes').hide(); 
		$('.footnote-tooltip').show();		
	}
});