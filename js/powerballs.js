class Powerballs {

    constructor(ctx, powerBallsPosY, powerBallsWidth, speed, canvasSize) {
        this.ctx = ctx
        this.powerBallsPos = {
            x: undefined,
            y: epowerBallsPosY
        }
        this.powerBallsSize = { w: powerBallsWidth, h: 30 }
        this.powerBallsSpeed = speed
        this.canvasSize = canvasSize
        this.imageInstance = undefined

    }

    init() {
        this.createpowerBalls()
        this.move()
        this.powerBallsRandomPosX()
    }

    powerBallsRandomPosX() {
        this.powerBallsPos.x = Math.floor(Math.random() * 500)
        if (this.powerBallsPos.x + this.powerBallsSize.w > this.canvasSize.w || this.powerBallsPos.x === 0) {
            this.powerBallsPos.x = 100
        }

    }

    move() {
        this.powerBallsPos.y += this.powerBallsSpeed
    }

    createPowerBalls() {
        this.imageInstance = new Image()
        this.imageInstance.src = 'img/jumping-bed.png'
        this.ctx.drawImage(this.imageInstance, this.powerBallsPos.x, this.powerBallsPos.y, this.powerBallsSize.w, this.powerBallsSize.h)
        // aqui es donde metemos la imagen de los powerballs
    }


}