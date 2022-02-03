
var ElementCursor = {
    cursorElement: "",
    setCursor: function (cursorId) {
        $('html').css({
            'cursor': 'none',
        });
        ElementCursor.cursorElement = cursorId;
        ElementCursor.updateCursor();
    },
    removeCursor: function () {
        $('html').css({
            'cursor': ''
        });
        ElementCursor.cursorElement = '';
    },
    updateCursor: function () {
        $(document).mousemove(function (e) {
            $('#' + ElementCursor.cursorElement).css({
                'position': 'fixed',
                'user-select': 'none',
                'top': e.pageY + 2 + 'px',
                'left': e.pageX + 2 + 'px'
            });
        });
    }
};

ElementCursor.setCursor("newCursor");


window.getElementById("newCursor").element.style.color = "blue";