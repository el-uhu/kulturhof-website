// When the user scrolls down 250px from the top of the document, resize the header
$('#content').scroll(function() {
    if ($(this).scrollTop() > 250){
        $('#header').addClass("smaller");
    }
    else{
        $('#header').removeClass("smaller");
    }
});


// window.onscroll = function() {test()};
