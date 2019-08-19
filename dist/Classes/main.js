let _score = 0
let _seconds = 0
const player = new Player(250,250)
const gameController = new GameController()
$('body').append('<div id="container"></div>')
$('body').append('<div id="enemy_container"></div>')
$('body').append('<img id="player_healthbar">')
$('#player_healthbar').attr('src', '../Pictures/HealthBar1.png')
$('body').on('keydown', player.move)
$('body').on('keyup', player.stopMove)
let timeCounter = 0
const looper = setInterval(function(){
    player.updateCSS()
    gameController.killFire()
    gameController.ranEgg()
    gameController.eggGroundCollison(player)
    const b = gameController.killPlayer(player)
    gameController.playerHitChicken(player)
    const a = gameController.loadNextLevel() 
    if (a || b){
        _seconds = Math.floor(timeCounter)
        gameController.lose(b, _score, timeCounter)
        clearInterval(looper)
    }
    timeCounter += 0.025
}, 25)

$('body').on('click', '#button', function(){
    const input = $('#input').val()
    const obj = {
        name: input,
        time: _seconds,
        score: _score
    }
    console.log(obj)
    const p = $.post('/sendScore', obj)
    p.then(function(response){
        $('#button').remove()
    })
})