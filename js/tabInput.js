// Based off of stackoverflow answer --http://stackoverflow.com/questions/6140632/how-to-handle-tab-in-textarea 

var editors = document.getElementsByClassName('editorWithPreview');
for (var i = 0; i < editors.length; i++) {
    var editor = editors[i];
    if (editor.addEventListener) {
        editor.addEventListener("keydown", getElementsByClassName);
        myInput.addEventListener('keydown', this.keyHandler, false);
    }
    else if (editor.attachEvent) {          /* IE hack */
        editor.attachEvent('onkeydown', this.keyHandler); 
    }
}

function keyHandler(e) {
    var TABKEY = 9;
    if(e.keyCode == TABKEY) {
        this.value += "    ";
        if(e.preventDefault) {
            e.preventDefault();
        }
        return false;
    }
}
