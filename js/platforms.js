class Platform {

    constructor(ctx, posY, speed, canvasSize) {
        this.ctx = ctx
        this.platformPos = {

            x: Math.floor(Math.random() * (500 - 50) + 50),

            y: posY
        }
        this.platformSize = { w: 100, h: 20 }
        this.platformSpeed = speed
        this.canvasSize = canvasSize

        this.init()

    }

    init() {
        this.createPlatform()
        this.move()
    }

    createPlatform() {
        this.ctx.fillStyle = '#5c4747'
        this.ctx.fillRect(this.platformPos.x, this.platformPos.y, this.platformSize.w, this.platformSize.h)
    }



    move() {

        this.platformPos.y += this.platformSpeed

    }

}

