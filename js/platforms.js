class Platform {

    constructor(ctx, platformPosY, platformWidth, speed, color, canvasSize) {
        this.ctx = ctx
        this.platformPos = {
            x: undefined,
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
        this.platformRandomPosX()
    }

    platformRandomPosX() {
        this.platformPos.x = Math.floor(Math.random() * (500 - 25) + 25)
    }

    createPlatform() {
        this.ctx.fillStyle = this.color
        this.ctx.fillRect(this.platformPos.x, this.platformPos.y, this.platformSize.w, this.platformSize.h)
    }

    move() {
        this.platformPos.y += this.platformSpeed
    }

}

