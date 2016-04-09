window.onload = function() {

    var IMAGE_CAROUSEL   = 'carousel';
    var CAROUSEL_ELEMENT = 'figure';

    var slideInterval = 3500;

    startPlayback();

    /**
     * Return each of the IMAGE_CAROUSEL's CAROUSEL_ELEMENT.
     * @returns {NodeList} Each of the elements within the carousel.
     */
    function getFigures(){
        return document.getElementById(IMAGE_CAROUSEL).getElementsByTagName(CAROUSEL_ELEMENT);
    }

    /**
     * Iterates over each of the CAROUSEL_ELEMENT.
     * Setting each in turn with the visible class so that they are displayed to the user.
     */
    function moveForward() {
        var pointer;
        var figures = getFigures();
        for (var i = 0; i < figures.length; i++) {
            if (figures[i].className == 'visible') {
                figures[i].className = '';
                pointer = i;
            }
        }
        if (++pointer == figures.length) {
            pointer = 0;
        }
        figures[pointer].className = 'visible';
        setTimeout(moveForward, slideInterval);
    }

    /**
     * Start the IMAGE_CAROUSEL.
     */
    function startPlayback() {
        setTimeout(moveForward, slideInterval)
    }

};