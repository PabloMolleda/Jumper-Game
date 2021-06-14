class Jumper {
    constructor(ctx, platforms, jumperPosX, jumperWidth, jumperHeight, keys) {

        this.ctx = ctx
        this.jumperPos = { x: jumperPosX, y: 200 }
        this.jumperSize = { w: jumperWidth, h: jumperHeight }
        this.imageInstance = undefined
        this.keys = keys
        this.jumperBottom = this.jumperPos.y + this.jumperSize.h + this.jumperSize.w
        this.gravity = 0.8
        this.speedPosY = 2
        //this.jumperPosY0 = this.platforms[0].platformPos.y + platformSize.h
        this.jumperPosY0 = this.jumperPos.y
        this.isJumping = undefined



        this.init()

    }

    init() {
        // this.imageInstance = new Image()
        // this.imageInstance.scr = '$$'
        this.setListeners()
        // this.jump()
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
        this.ctx.fillRect(this.jumperPos.x, this.jumperPos.y, 40, 60)
    }

    jump() {
        this.isJumping = true
        // this.speedPosY += this.gravity;
        this.jumperPos.y += this.speedPosY
        //if (this.jumperBottom >)
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