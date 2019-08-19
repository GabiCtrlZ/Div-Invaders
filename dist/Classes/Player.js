class Player{
    constructor(x, y){
        this.x = x
        this.y = y
        this.speedX = 0
        this.speedY = 0
        this.HP = 3
        $('body').append('<img id="player">')
        this.player = $('#player')
        this.player.attr('src', '../Pictures/SpaceShip.png')
    }
    changeX(num){
        this.speedX += num
        this.speedX = Math.min (this.speedX, 10)
        this.speedX = Math.max (this.speedX, -10)
    }
    changeY(num){
        this.speedY += num
        this.speedY = Math.min (this.speedY, 10)
        this.speedY = Math.max (this.speedY, -10)
    }
    shoot(){
        let positionPlayerY = parseInt(this.player.css('top'))
        let positionPlayerX = parseInt(this.player.css('left'))
        let fire = new Fire(positionPlayerX, positionPlayerY)
        fire.fireMove()
    }
    move(key){
        switch (key.keyCode) {
            case 37:
                player.changeX(-10)
                break
            case 38:
                player.changeY(-10)
                break
            case 39:
                player.changeX(10)
                break
            case 40:
                player.changeY(10)
                break
            case 32:
                if(player.HP > 0){
                player.shoot()
            }
        }
    }
    stopMove(key){
        switch (key.keyCode) {
            case 37:
                player.speedX = 0
                break
            case 38:
                player.speedY = 0
                break
            case 39:
                player.speedX = 0
                break
            case 40:
                player.speedY = 0
        }
    }
    updateCSS(){
        const y = parseInt($(this.player).css('top'))
        const x = parseInt($(this.player).css('left'))
        if ( x > 1470){
            $(this.player).css('left', '1470px')
            return
        }
        else if ( x < 10){
            $(this.player).css('left', '10px')
            return
        }
        if ( y > 650){
            $(this.player).css('top', '650px')
            return
        }
        else if ( y < 10){
            $(this.player).css('top', '10px')
            return
        }
        this.player.css({
            left: `+=${this.speedX}`,
            top: `+=${this.speedY}`,
        })
    }
    decreaseHP(){
        this.HP--
        $('#player_healthbar').attr('src', `../Pictures/HealthBar${4-this.HP}.png`)
    }
    getHP(){
        return this.HP
    }
}