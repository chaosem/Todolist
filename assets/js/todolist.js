// Check Off specific Todos By Clicking
$(document).ready(function() {
    $('li').click(function() {
        $(this).toggleClass('completed');
    })
});

// Click on X to delete Todo