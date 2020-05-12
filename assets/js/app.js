
//Disable cut copy paste
$('body').bind('cut copy paste', function (e) {
    e.preventDefault();
});

//Disable mouse right click
$("body").on("contextmenu",function(e){
    return false;
});
document.onkeydown = function(e) {
    if (e.ctrlKey &&
        (e.keyCode === 67 ||
            e.keyCode === 86 ||
            e.keyCode === 85 ||
            e.keyCode === 117)) {
        //alert('This is not allowed');
        return false;
    } else {
        return true;
    }
};

$(document).keydown(function (event) {
    if (event.keyCode == 123) {
        return false;
    }
    else if ((event.ctrlKey && event.shiftKey && event.keyCode == 73) || (event.ctrlKey && event.shiftKey && event.keyCode == 74)) {
        return false;
    }
});
