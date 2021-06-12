class Platform {

    constructor(ctx, platformPosY, platformPosX, platformWidth, speed, color, canvasSize) {
        this.ctx = ctx
        this.platformPos = {

            x: platformPosX,

            y: platformPosY

        }
        this.platformSize = { w: platformWidth, h: 20 }
        this.platformSpeed = speed
        this.canvasSize = canvasSize
        this.color = color

        this.init()

    }

    init() {
        this.createPlatform()
        this.move()
    }

    createPlatform() {
        this.ctx.fillStyle = this.color
        this.ctx.fillRect(this.platformPos.x, this.platformPos.y, this.platformSize.w, this.platformSize.h)
    }



    move() {

       this.platformPos.y += this.platformSpeed

    }

}

