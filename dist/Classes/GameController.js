class GameController {
    constructor() {
        this.counter = 0
        this.levelTimer = 0
        this.level = 1
        this.score = 0
    }
    killFire() {
        const fires = $('.fire')
        if (fires.length > 15) {
            $(fires[0]).remove();
        }
    }

    enemyGenerator(a, b, c) {
        for (let i = 0; i < 10; i++) {
            let enemy = new Enemy((145 + (i * 80)), (50 + (0 * 80)), a)
            enemy.enemyMove()
        }
        for (let i = 0; i < 10; i++) {
            let enemy = new Enemy((145 + (i * 80)), (50 + (1 * 80)), b)
            enemy.enemyMove()
        }
        for (let i = 0; i < 10; i++) {
            let enemy = new Enemy((145 + (i * 80)), (50 + (2 * 80)), c)
            enemy.enemyMove()
        }
    }
    ranNum(num) {
        return Math.floor(Math.random() * num)
    }
    levelChosser(num){
        if (num == 1){
            this.enemyGenerator('weak', 'weak', 'weak')
            return false
        }
        else if (num == 2){
            this.enemyGenerator('medium', 'weak', 'weak')
            return false
        }
        else if (num == 3){
            this.enemyGenerator('medium', 'medium', 'weak')
            return false
        }
        else if (num == 4){
            this.enemyGenerator('strongggg', 'medium', 'medium')
            return false
        }
        else {
            return true
        }
    }
    ranEgg() {
        if (this.counter == 35) {
            const enemies = $('.enemy')
            if (enemies.length) {
                const ran = this.ranNum(enemies.length - 1)
                let positionY = parseInt($(enemies[ran]).css('top'))
                let positionX = parseInt($(enemies[ran]).css('left'))
                let egg = new Egg(positionX, positionY)
                egg.eggMove()
            }
            this.counter = 0
        }
        this.counter++
    }
    inRange(x, y, x2, y2) {
        const a = (x >= (x2 - 25) && x <= (x2 + 25))
        const b = (y >= (y2 - 25) && y <= (y2 + 25))
        if (a && b) {
            return true
        }
        else return false
    }
    eggGroundCollison(player) {
        const eggs = $('.egg')
        const playerY = parseInt($('#player').css('top'))
        const playerX = parseInt($('#player').css('left'))
        for (let egg of eggs) {
            let positionY = parseInt($(egg).css('top'))
            let positionX = parseInt($(egg).css('left'))
            if (positionY >= 680) {
                $(egg).remove()
            }
            if (this.inRange(playerX, playerY, positionX, positionY)) {
                $(egg).remove()
                player.decreaseHP()
            }
        }
    }
    playerHitChicken(player) {
        const enemies = $('.enemy')
        const playerY = parseInt($('#player').css('top'))
        const playerX = parseInt($('#player').css('left'))
        for (let enemy of enemies) {
            let positionY = parseInt($(enemy).css('top'))
            let positionX = parseInt($(enemy).css('left'))
            if (this.inRange(playerX, playerY, positionX, positionY)) {
                player.decreaseHP()
            }
        }
    }
    killPlayer(player) {
        if (player.getHP() == 0) {
            $('#player').remove()
            return true
        }
        return false
    }
    loadNextLevel() {
        let bool = false
        if (!($('.enemy').length)) {
            if (!($('.level').length)) {
                $('body').append(`<div class="level">Level ${this.level}</div>`)
            }
            this.levelTimer++
            if (this.levelTimer >= 200) {
                $('.level').remove()
                bool = this.levelChosser(this.level)
                this.level++
                this.levelTimer = 0
            }
        }
        return bool
    }
    lose(b, score){
        $('body').append(`<div class="level">Game Over!</div>`)
        $('body').append(`<input type="text" id="input" placeholder="Enter Name" required maxlength="5"">`)
        $('body').append(`<button id="button">Sumbit</button>`)
        $('body').append(`<div class="score">score: ${score}</div>`)
        $('.level').css({
            left: `-=100`,
        })
        if (b){
            $('.level').css({
                top: `+=260`,
            })
            $('#button').css({
                top: `+=260`,
            })
            $('#input').css({
                top: `+=260`,
            })
            $('.score').css({
                top: `+=260`,
            })
        }
    }
}