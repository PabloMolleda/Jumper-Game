class Powerballs {

    constructor(ctx, powerBallsWidth, speed, canvasSize, powerBallsPhoto) {
        this.ctx = ctx
        this.powerBallsPos = {
            x: undefined,
            y: undefined
        }
        this.powerBallsSize = { w: powerBallsWidth, h: 30 }
        this.powerBallsSpeed = speed
        this.canvasSize = canvasSize
        this.imageInstance = undefined
        this.init()
        this.powerBallsImage = powerBallsPhoto

    }

    init() {
        this.powerBallsRandomPosX()
        this.powerBallsRandomPosY()
    }

    powerBallsRandomPosX() {
        this.powerBallsPos.x = Math.floor(Math.random() * 500)
        if (this.powerBallsPos.x + this.powerBallsSize.w > this.canvasSize.w || this.powerBallsPos.x === 0) {
            this.powerBallsPos.x = 123
        }
    }
    powerBallsRandomPosY() {
        this.powerBallsPos.y = Math.floor(Math.random() * 700)
        if (this.powerBallsPos.y + this.powerBallsSize.h > this.canvasSize.h || this.powerBallsPos.y === 0) {
            this.powerBallsPos.y = 352
        }

    }

    move() {
        this.powerBallsPos.y += this.powerBallsSpeed
    }

    createPowerBalls() {
        this.imageInstance = new Image()
        this.imageInstance.src = `img/${this.powerBallsPhoto}`
        this.ctx.drawImage(this.imageInstance, this.powerBallsPos.x, this.powerBallsPos.y, this.powerBallsSize.w, this.powerBallsSize.h)
        // aqui es donde metemos la imagen de los powerballs
    }


}