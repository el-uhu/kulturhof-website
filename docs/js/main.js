$('#content').scroll(function() {
    if ($(this).scrollTop() > 250){
        $('#header').addClass("smaller");
    }
    else{
        $('#header').removeClass("smaller");
    }
});

// When the user scrolls down 50px from the top of the document, resize the header's font size
// window.onscroll = function() {test()};
