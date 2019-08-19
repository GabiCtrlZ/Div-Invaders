$('#global').on('click', function(){
    $('#maincontainer').hide()
    showHighGlobal()
})

function showHighGlobal(){
    const p = $.get('/highGlobal')
    p.then(function(response){
        for (let score of response){
            $('body').append(`<div class='button'>${score.name} ${score.score} ${score.time}</div>`)
        }
    })
}