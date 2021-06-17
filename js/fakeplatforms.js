class Fakeplatform {

    constructor(ctx, fakePlatformPosY, fakePlatformWidth, speed, canvasSize) {
        this.ctx = ctx
        this.fakePlatformPos = {
            x: undefined,
            y: fakePlatformPosY
        }
        this.fakePlatformSize = { w: fakePlatformWidth, h: 20 }
        this.fakePlatformSpeed = speed
        this.canvasSize = canvasSize

        this.init()

    }

    init() {
        this.platformRandomPosX()
    }

    platformRandomPosX() {
        this.fakePlatformPos.x = Math.floor(Math.random() * 483)
        if (this.fakePlatformPos.x + this.fakePlatformSize.w > this.canvasSize.w || this.fakePlatformPos.x === 0) {
            this.fakePlatformPos.x = 263
        }
    }

    createFakePlatform() {
        this.imageInstance = new Image()
        this.imageInstance.src = 'img/platform.png'
        this.ctx.drawImage(this.imageInstance, this.fakePlatformPos.x, this.fakePlatformPos.y, this.fakePlatformSize.w, this.fakePlatformSize.h)
    }

    move() {
        this.fakePlatformPos.y += this.fakePlatformSpeed
    }


}

