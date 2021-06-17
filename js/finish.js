class Finishline {

    constructor(ctx, canvasSize, lastPlatformPos, finishLinePhoto) {
        this.ctx = ctx
        this.finishLinePos = {
            x: 0,
            y: lastPlatformPos + 100
        }
        this.finishLineSize = { w: 500, h: 20 }
        this.canvasSize = canvasSize
        this.speed = 3
        this.createFinishLine()
        this.finishLineImage = finishLinePhoto

    }

    createFinishLine() {
        this.imageInstance = new Image()
        this.imageInstance.src = `img/${this.finishLinePhoto}`
    }

    draw() {
        //this.ctx.drawImage(this.imageInstance, this.finishLinePos.x, this.finishLinePos.y, this.finishLineSize.w, this.finishLineSize.h)
    }

    move() {
        this.finishLinePos.y += this.speed
    }


}

