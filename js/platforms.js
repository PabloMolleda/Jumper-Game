class Platform {

    constructor(ctx, platformPosY, platformWidth, speed, canvasSize) {
        this.ctx = ctx
        this.platformPos = {
            x: undefined,
            y: platformPosY
        }
        this.platformSize = { w: platformWidth, h: 20 }
        this.platformSpeed = speed
        this.canvasSize = canvasSize

        this.init()

    }

    init() {
        this.platformRandomPosX()
        this.imageInstance = new Image()
        this.imageInstance.src = 'img/platform1.png'
    }

    platformRandomPosX() {
        this.platformPos.x = Math.floor(Math.random() * 500)
        if (this.platformPos.x + this.platformSize.w > this.canvasSize.w || this.platformPos.x === 0) {
            this.platformPos.x = 100
        }
    }

    createPlatform() {
        this.ctx.drawImage(this.imageInstance, this.platformPos.x, this.platformPos.y, this.platformSize.w, this.platformSize.h)
    }

    checkSpeed(isJumping) {
        isJumping === true ? this.platformSpeed = +5 : null

    }

    maximumSpeed(isJumping) {
        isJumping === true ? this.platformSpeed += 5 : null
    }

    move() {
        this.platformPos.y += this.platformSpeed
    }


}

