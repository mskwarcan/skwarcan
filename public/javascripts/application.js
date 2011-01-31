$(document).ready(function(){
	$("a.fancy").fancybox({
		'transitionIn'	: 'fade',
		'transitionOut'	: 'fade'	
	});
	
	$('#new_inquiry').validate();
	$('#new_blog_comment').validate();
	
	$('.more').click(function (){
		$(this).parent().siblings('.hide').animate({
			height:'toggle'
		}, 500);
		return false;
	});
	
	// jQuery Form Plugin options
	var myFormOptions = {
	  beforeSubmit:  formBeforeSubmit,
	  success:       formAfterSubmit
	};
	
	function formBeforeSubmit() {
	  // PERFORM ACTIONS BEFORE FORM SUBMIT HERE
	  return true;
	}

	function formAfterSubmit()  {
	  // PERFORM ACTIONS AFTER FORM SUBMIT HERE
		$("#new_inquiry")[0].reset();
		$('.sent').show();
		return false;
	}
	
	// Make form use jQuery Form Plugin
	$('#new_inquiry').ajaxForm(myFormOptions);
});