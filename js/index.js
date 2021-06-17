const startButton = document.getElementById('btn-Start');
const canvasContainer = document.querySelector('.canvas-container')
const startContainer = document.querySelector('.start-container')
const gameOverContainer = document.querySelector('.gameOver-container')



window.onload = () => {
    document.getElementById('btn-Start').onclick = () => {
        setStart()
        setCanvas()
        jumpGame.init('canvas')
    };

    document.getElementById('btn-Try').onclick = () => {
        document.location.reload()
    };

};




function setCanvas() {
    console.log(canvasContainer)
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

}