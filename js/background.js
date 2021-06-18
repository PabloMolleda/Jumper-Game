class Background {

    constructor(ctx, backgroundWidth, backgroundHeight, imgSource) {
        this.ctx = ctx
        this.backgroundSize = {
            w: backgroundWidth,
            h: backgroundHeight
        }

        this.image = new Image()
        this.image.src = imgSource

        this.image2 = new Image()
        this.image2.src = 'img/bgCanvas2.png'

        this.backgroundPos = {
            x: 0,
            y: 0
        }

        this.velY = 1
    }

    draw() {
        this.ctx.drawImage(this.image, this.backgroundPos.x, this.backgroundPos.y - 5, this.backgroundSize.w, this.backgroundSize.h)
        this.ctx.drawImage(this.image2, this.backgroundPos.x, this.backgroundPos.y - this.backgroundSize.h - 1, this.backgroundSize.w, this.backgroundSize.h)
        this.move()
    }

    move() {
        if (this.backgroundPos.y >= +this.backgroundSize.h) {
            this.backgroundPos.y = 700
        }
        this.backgroundPos.y += this.velY
    }
}
