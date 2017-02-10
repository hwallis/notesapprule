$(document).ready( function() {
    var $title= $('#title');
    var $content = $('#content');
    var originalTitle = $title.val();
    var originalContent = $content.val();

    function toggleForm() {
        $edit = $('#edit');
        $edit.toggleClass('hide');
        $edit[0].reset();
        $('#edit_button').toggleClass('hide');
    }

    function livePreview() {
        $('h1').html($title.val());
        $('p').html($content.val());
    }

    $('#edit_button').click( function() {
        toggleForm();
    });

    $('#cancel').click( function() {
        $('h1').text(originalTitle);
        $('p').text(originalConent);
        toggleForm();
    });

    $('#title').on('keyup', function() {
        livePreview();
    });

    $('#content').on('keyup', function() {
        livePreview();
    });
});