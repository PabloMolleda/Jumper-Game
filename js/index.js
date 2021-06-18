const startButton = document.getElementById('btn-Start');
const canvasContainer = document.querySelector('.canvas-container')
const startContainer = document.querySelector('.start-container')
const gameOverContainer = document.querySelector('.gameOver-container')
const winContainer = document.querySelector('.win-container ')
const gameOverScore = document.querySelector('.score-gOver')
const winScore = document.querySelector('.score-win')



const winSound = document.getElementById('win-sound')
const mainSound = document.getElementById('main-sound')
const loserSound = document.getElementById('loser-sound')




window.onload = () => {
    document.getElementById('btn-Start').onclick = () => {
        setStart()
        setCanvas()
        jumpGame.init('canvas')
        mainSound.innerHTML = '<audio src="sounds/main-song.mp3" autoplay></audio>'
    }

    document.getElementById('btn-Try').onclick = () => {
        document.location.reload()
    }
    document.getElementById('btn-Again').onclick = () => {
        document.location.reload()
    }

};




function setCanvas() {
    canvasContainer.classList.toggle('invisible')
    canvasContainer.classList.toggle('visible')
}

function setStart() {
    startContainer.classList.toggle('visible')
    startContainer.classList.toggle('invisible')
}

function setGameOver() {
    gameOverContainer.classList.toggle('invisible')
    gameOverContainer.classList.toggle('visible')
    console.log(jumpGame.score)
    loserSound.innerHTML = '<audio src="sounds/loser-song.mp3" autoplay></audio>'
    //gameOverScore.innerHTML(jumpGame.score)

}

function setWin() {
    winContainer.classList.toggle('invisible')
    winContainer.classList.toggle('visible')
    winSound.innerHTML = '<audio src="sounds/win-song.mp3" autoplay></audio>'
    //winScore.textContent(this.score)

}
