$(document).ready(function() {
    // Check Off specific Todos By Clicking
    $('li').click(function() {
        $(this).toggleClass('completed');
    })

    // Click on X to delete Todo
    $('span').click(function(event) {
        $(this).remove();
        event.stopPropagation();
    });
});

