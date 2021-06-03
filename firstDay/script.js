(function(){
    var keys = document.querySelectorAll('div.key');

    keys.forEach(function(key) {
        key.addEventListener('click', handleClick);
        key.addEventListener('transitionend', removeClass);
    });

    document.addEventListener('keydown', handleKeyPress);

    function playSound(code) {
        var audioFile = document.querySelector('audio[data-key="' + code +'"]'),
            elem;
        if (!audioFile) return;
        elem = document.querySelector('div[data-key="' + code +'"]');
        audioFile.currentTime = 0;
        audioFile.play();
        elem.classList += ' playing';
    }

    function handleKeyPress(e) {
        var code = e.keyCode;
        playSound(code);
    }

    function handleClick(e) {
        var code;
        if ( this == e.target ) {
            code = this.getAttribute("data-key");
        } else {
            code = e.target.parentElement.getAttribute("data-key");
        }
        playSound(code);
    }

    function removeClass(e) {
        this.className = 'key';
    }

}());
