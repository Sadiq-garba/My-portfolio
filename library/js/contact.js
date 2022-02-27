	(function($) {
    // Select the form and form message

    var form = $('#ajax-contact-form'),

        form_messages = $('#form-messages');

    $(form).on('submit', function(e) {

        e.preventDefault(); // Stop browser loading
         

        // Get form data

        var form_data = $(form).serialize();

         

        // Send Ajax Request

        var the_request = $.ajax({

            type: 'POST', // Request Type POST, GET, etc.

            url: "contact.php",

            data: form_data

        });
      // At success

        the_request.done(function(data){

            form_messages.text("Success: "+data);

        });

        the_request.done(function(){

            form_messages.text("Error: "+data);

        });

    });

})(jQuery);
