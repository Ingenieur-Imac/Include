window.onload = function() {
    var next = document.getElementsByClassName("next");
    for (var i in next) {
        if(next.hasOwnProperty(i)){
            next[i].addEventListener("click", function(e) { goNext(e); });
        }
    }
}

function goNext(e) {
    var target = $(e.target).attr("rel");
    if ($("#" + target).offset() === undefined) {
        target = $(e.target).parent().attr("rel");
    }

    $("html, body").animate({
        scrollTop: $("#" + target).offset().top
    }, 500);

}
