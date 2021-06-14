class Jumper {
    constructor(ctx, jumperPosX, jumperWidth, jumperHeight, keys) {

        this.ctx = ctx
        this.jumperPos = { x: jumperPosX, y: 450 }
        this.jumperSize = { w: jumperWidth, h: jumperHeight }
        this.keys = keys
        this.imageInstance = undefined
        this.gravity = 0.4
        this.speedPosY = 1
        this.jumperPosY0 = this.jumperPos.y - 20
        this.isJumping = undefined


        this.init()

    }

    init() {
        // this.imageInstance = new Image()
        // this.imageInstance.scr = '$$'
        this.setListeners()
        this.jump()
    }


    setListeners() {
        document.onkeydown = e => {

            // console.log(this.ctx)
            e.key === this.keys.left ? this.moveLeft() : null
            e.key === this.keys.rigth ? this.moveRigth() : null
        }
    }

    moveLeft() {

        this.jumperPos.x >= 40 ? this.jumperPos.x -= 20 : null // poner cambio de posición bien

    }

    moveRigth() {

        this.jumperPos.x <= 500 - 40 ? this.jumperPos.x += 20 : null // poner cambio de posición bien

        // vamos a meter una imagen directamente
    }

    drawJumper() {
        // this.ctx.drawImage(this.imageInstance, this.jumperPos.x, this.jumperPos.y, this.jumperSize.w, this.jumperSize.h)

        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(this.jumperPos.x, this.jumperPos.y, 40, 40)
    }

    jump() {

        this.isJumping = true

        if (this.jumperPos.y >= this.jumperPosY0) {

            this.jumperPosY0 -= 40
            this.speedPosY -= 8


        }


        // this.imageInstance, this.jumperPos.x, this.jumperPos.y, this.jumperSize.w, this.jumperSize.h

    }

    // isJumping() {
    //     if (this.jumperPos.y < this.jumperPosY0) {
    //         this.jumperPos.y += this.speedPosY
    //         this.speedPosY += this.gravity
    //     } else {
    //         this.jumperPos.y = this.jumperPosY0
    //         this.speedPosY = 1
    //     }
    // }
}