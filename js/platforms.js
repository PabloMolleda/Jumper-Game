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
        this.platformPos.x = Math.floor(Math.random() * 500)
        if (this.platformPos.x + this.platformSize.w > this.canvasSize.w || this.platformPos.x === 0) {
            this.platformPos.x = 100
        }
        console.log(this.platformPos.x)
    }

    createPlatform() {
        this.ctx.fillStyle = this.color
        this.ctx.fillRect(this.platformPos.x, this.platformPos.y, this.platformSize.w, this.platformSize.h)
    }

    checkSpeed(isJumping) {
        this.platformSpeed = 20
    }

    move() {
        this.platformPos.y += this.platformSpeed
    }



}

