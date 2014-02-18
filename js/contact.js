
jQuery(function($){

var FORMULARIO = window.FORMULARIO || {};

/* ==================================================
   Contact Form
================================================== */
$(document).ready(function(){
	Modernizr.load([
	{
		test: Modernizr.placeholder,
		nope: 'js/placeholder.js', 
		complete : function() {

		}
	}
	]);
	

	

	FORMULARIO.contactForm();

});

FORMULARIO.contactForm = function(){
	$("#contact-submit").on('click',function() {
		$contact_form = $('#contact-form');
		
		var fields = $contact_form.serialize();
		
		$.ajax({
			type: "POST",
			url: "php/contact.php",
			data: fields,
			dataType: 'json',
			success: function(response) {
				
				if(response.status){
					$('#contact-form input').val('');
					$('#contact-form textarea').val('');
				}
				
				$('#response').empty().html(response.html);
			}
		});
		return false;
	});
}

});