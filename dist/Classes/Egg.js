class Egg{
    constructor(x, y) {
        $('#enemy_container').append(`<img class="egg" style = "left: ${x+20}px; top: ${y+25}px">`)
        $('.egg').attr('src', '../Pictures/Egg.png')
    }
    eggMove() {
        let self = $('.egg').last()
        let counter = 0;

        let looper = setInterval(function() {
            counter++;
            self.css('top', `+=${5}`)

            if (counter >= 150) {
                clearInterval(looper);
            }

        }, 25);
    }
}