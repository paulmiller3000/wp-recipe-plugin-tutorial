(function($){
  $("#recipe_rating").bind( 'rated', function() {
    $(this).rateit( 'readonly', true );

    var form = {
      action:   'r_rate_recipe',
      rid:      $(this).data( 'rid' ),
      rating:   $(this).rateit( 'value' )
    };

    $.post( recipe_obj.ajax_url, form, function(data) {
      
    });
  });

  var featured_frame = wp.media({
    title: 'Select or Upload Media',
    button: {
      text: 'Use this media'
    },
    multiple: false
  });

  featured_frame.on( 'select', function() {
    var attachment = featured_frame.state().get('selection').first().toJSON();
    $("#recipe-img-preview").attr( 'src' ,attachment.url );
    $("#r_inputImgID").val( attachment.id );
  });

  $(document).on( 'click', '#recipe-img-upload-btn', function(e) {
    e.preventDefault();
    featured_frame.open();
  });

  $("#recipe-form").on( 'submit', function(e) {
    e.preventDefault();

    $(this).hide();

    $('#recipe-status').html(
      '<div class="alert alert-info">Please wait! We are submitting your recipe.</div>'
    );

    var form = {
      action: 'r_submit_user_recipe',
      title: $('#r_inputTitle').val(),
      content: tinymce.activeEditor.getContent(),
      attachment_id: $("#r_inputImgID").val()
    }

    $.post( recipe_obj.ajax_url, form, function(data) {
      if (data.status == 2 ) {

      } else {

      }
    });
  })
})(jQuery);