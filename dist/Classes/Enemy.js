class Enemy{
    constructor(x, y, type) {
        this.HP = type.length
        $('#enemy_container').append(`<img class="${type} enemy" style = "left: ${x}px; top: ${y}px">`)
        $('.weak').attr('src', '../Pictures/BigChickenCIU.png')
        $('.medium').attr('src', '../Pictures/ChickenBlue.png')
        $('.strongggg').attr('src', '../Pictures/ChickenHoly.png')
    }
    inRange(x, y, x2, y2){
        const a = (x2 >= x && x2 <= (x + 55))
        const b = (y2 >= y && y2 <= (y+55))
        if (a && b){
            return true
        }
        else return false
    }
    enemyHit(x, y){
        let arr = $('.fire')
        for (let shot of arr){
            const y2 = parseInt($(shot).css('top'))
            const x2 = parseInt($(shot).css('left'))
            if (this.inRange(x, y, x2, y2)){
                $(shot).remove()
                this.HP--
            }
        }
    }
    getHp(){
        return this.HP
    }
    enemyMove() {
        let self = $('.enemy').last()
        let me = this
        let counter = 0;
        let looper = setInterval(function() {
            const y = parseInt(self.css('top'))
            const x = parseInt(self.css('left'))
            me.enemyHit(x, y)
            counter++;
            if (counter < 430) {
                self.css('left', `+=${1}`)
            }
            else if(counter >= 430 && counter <860){
                self.css('left', `+=${-1}`)
            }
            else {
                counter = 0
                self.css('left', `+=${1}`)
            }
            if (me.getHp() <= 0){
                _score++
                self.remove()
                clearInterval(looper)
            }

        }, 25);
    }
}