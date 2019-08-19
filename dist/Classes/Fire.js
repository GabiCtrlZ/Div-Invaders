class Fire {
    constructor(x, y) {
        $('#container').append(`<img class="fire" style = "left: ${x+13}px; top: ${y}px">`)
        $('.fire').attr('src', '../Pictures/Laser.jpg')
    }
    fireMove() {
        let self = $('.fire').last()
        let counter = 0;

        let looper = setInterval(function() {
            counter++;
            self.css('top', `+=${-13}`)

            if (counter >= 60) {
                clearInterval(looper);
            }

        }, 25);
    }
}