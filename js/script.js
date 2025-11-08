let newGame = document.getElementById('game');
let playerX = document.getElementById('x');
let playerO = document.getElementById('o');
let text = document.querySelector('.text');
let x = document.getElementById('idX');
let o = document.getElementById('idO');
let noWin = document.getElementById('noWin');
let countX = 0;
let countO = 0;
let count = 0;
const winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
let startCounter = 0;

newGame.onclick = function () {
    if (startCounter == 0) {
        if (playerX.value == '') {
            playerX.value = 'Player X'
        }
        if (playerO.value == '') {
            playerO.value = 'Player O'
        }
        text.innerText = 'Խաղում է ։ ' + playerX.value;
        const table = document.createElement('table');
        document.body.appendChild(table)
        for (let i = 0; i < 3; i++) {
            const tbRow = document.createElement('tr');
            for (let j = 0; j < 3; j++) {
                const tbCol = document.createElement('td')
                tbRow.appendChild(tbCol);
                tbCol.onclick = function () {
                    if (tbCol.innerHTML == '') {
                        if (count % 2 === 0) {
                            tbCol.innerHTML = "X";
                            tbCol.classList.add('x');
                            text.innerText = 'Խաղում է ։ ' + playerO.value;
                        } else {
                            tbCol.innerHTML = "O";
                            tbCol.classList.add('o');
                            text.innerText = 'Խաղում է ։ ' + playerX.value;
                        }
                        count++;
                        win();
                    }
                }
            }
            table.appendChild(tbRow);
        }
        game.style.background = '#EF6585';
        game.style.color = '#20A39E';
        game.innerText = 'NEW GAME';
        const myGame = document.getElementById('myGame');
        myGame.classList.add('myBackground');
        x.style.display = 'flex';
        x.innerText = countX;
        o.style.display = 'flex';
        o.innerText = countO;
        text.style.display = 'block';
        startCounter++;
    } else {
        playAgain();
    }
}


function playAgain() {
    let myTd = document.getElementsByTagName('td');
    text.innerText = 'Խաղում է ։ ' + playerX.value;
    text.style.display = 'flex';
    noWin.style.display = 'none';
    count = 0;
    for (let i = 0; i < myTd.length; i++) {
        myTd[i].innerText = '';
        myTd[i].classList.remove('x', 'o')
    }
}


function win() {
    let myTd = document.getElementsByTagName('td');
    let w = false
    for (let i = 0; i < winCondition.length; i++) {
        if (myTd[winCondition[i][0]].innerHTML == 'X' && myTd[winCondition[i][1]].innerHTML == 'X'
            && myTd[winCondition[i][2]].innerHTML == 'X') {
            x.innerText = countX += 1;
            text.innerText = 'Հաղթեց ՝ ' + playerX.value;
            w = true;
            setTimeout(() => {
                playAgain();
            }, 1000);
        } else if (myTd[winCondition[i][0]].innerHTML == 'O' && myTd[winCondition[i][1]].innerHTML == 'O'
            && myTd[winCondition[i][2]].innerHTML == 'O') {
            o.innerText = countO += 1;
            text.innerText = 'Հաղթեց ՝ ' + playerO.value;
            w = true;
            setTimeout(() => {
                playAgain();
            }, 1000);
        }
    }
    if (count == 9 && w == false) {
        noWin.style.display = 'flex';
        text.style.display = 'none';
        setTimeout(() => {
            playAgain();
        }, 1000);
    }
}

// const gameEnd = function(){
//     if(countX == 5){
//         let div = document.createElement('div');
//         div.classList.add('gameOver');
//         div.innerHTML = 'Հաղթեցին ՝' + playerX.value;
//     }
//     if(countO == 5 ){
//         let div = document.createElement('div');
//         div.classList.add('gameOver');
//         div.innerHTML = 'Հաղթեցին ՝' + playerO.value;
//     }
// }