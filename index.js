function roll_dice() {
    const dices_sides = ['1', '2', '3', '4', '5', '6']
    const dice1 = Math.floor((Math.random()) * 6) + 1
    const dice2 = Math.floor((Math.random()) * 6) + 1
    return [dice1, dice2]
}

const players = [{ name: 'player1', player_number: '1', score: 0, corrent_turn: false }, { name: 'player2', player_number: '2', score: 0, corrent_turn: false }]
let index = Math.floor((Math.random()) * 2)
players[index].corrent_turn = true
console.log(players[index]);

function turn() {

    console.log(corrent_player);

    const roll_button = document.querySelector('.roll_button')
    roll_button.addEventListener('click', (e) => {
        e.preventDefault()
        const corrent_player = players.find((player) => player.corrent_turn)
        const corrent_score = document.querySelector(`.corrent_score${corrent_player.player_number}`)
        console.log(corrent_player);
        if (corrent_player.corrent_turn) {
            if (!players.find((player) => player.score >= 100)) {
                const dices_results = roll_dice()
                const dices = document.querySelectorAll('.dice')
                dices[0].style.backgroundImage = `url("/images/dice-${dices_results[0]}.png")`
                dices[1].style.backgroundImage = `url("/images/dice-${dices_results[1]}.png")`
                if (dices_results[0] !== dices_results[1]) {
                    const sum = dices_results[0] + dices_results[1]
                    console.log(sum);
                    console.log(corrent_score);
                    corrent_score.textContent = Number(corrent_score.textContent) + sum
                    // corrent_player.score += Number(corrent_score.textContent)
                } else {
                    corrent_score.textContent = 0
                    switch_player(corrent_player)
                }
            } else {
                if (corrent_player.score >= 100) {
                    const winn = document.createElement('p')
                    winn.textContent = `${corrent_player} is the winner!!`
                }

            }
        }

    
    })
const hold_button = document.querySelector('.hold_button')
hold_button.addEventListener('click', (e) => {
    e.preventDefault()
    const corrent_player = players.find((player) => player.corrent_turn)
    const corrent_score = document.querySelector(`.corrent_score${corrent_player.player_number}`)
    corrent_player.score += Number(corrent_score.textContent)
    console.log(corrent_player);
    const sum_score = document.querySelector(`.sum_score${corrent_player.player_number}`)
    sum_score.textContent = Number(sum_score.textContent) + Number(corrent_score.textContent)
    corrent_score.textContent = '0'
    console.log(corrent_score);
    switch_player(corrent_player)
    console.log(corrent_score);



})
const new_game_button = document.querySelector('.new_game_button')
new_game_button.addEventListener('click', e => {
    window.location.reload()
})
}






function switch_player(corrent_player) {
    console.log(corrent_player);
    corrent_player.corrent_turn = false
    corrent_player === players[0] ? corrent_player = players[1] : corrent_player = players[0]
    corrent_player.corrent_turn = true
    console.log(corrent_player);
}


let corrent_player = players.find((player) => player.corrent_turn)
console.log(corrent_player);
turn()
