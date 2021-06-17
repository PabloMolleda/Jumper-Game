class Finishline {

    constructor(ctx, canvasSize, lastPlatformPosition, finishLinePhoto) {
        this.ctx = ctx
        this.finishLinePos = {
            x: 0,
            y: lastPlatformPosition - 200
        }
        this.finishLineSize = { w: 500, h: 20 }
        this.canvasSize = canvasSize
        this.speed = 3
        this.finishLineImage = finishLinePhoto
        this.createFinishLine()

    }

    createFinishLine() {
        this.imageInstance = new Image()
        this.imageInstance.src = `img/${this.finishLineImage}`
    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.finishLinePos.x, this.finishLinePos.y, this.finishLineSize.w, this.finishLineSize.h)
    }

    move() {
        if (this.finishLinePos.y < 550) {
         this.finishLinePos.y += this.speed
        } 
    }


}

