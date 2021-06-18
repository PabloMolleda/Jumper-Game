class Jumper {
    constructor(ctx, jumperPosX, keys) {

        this.ctx = ctx
        this.jumperPos = { x: jumperPosX, y: 600 }
        this.jumperSize = { w: 80, h: 100 }
        this.imageInstance = undefined
        this.keys = keys
        //        this.jumperBottom = this.jumperPos.y + this.jumperSize.h + this.jumperSize.w

        //this.jumperPosY0 = this.platforms[0].platformPos.y + platformSize.h
        this.jumperPosY0 = this.jumperPos.y
        this.gravity = 0.2
        this.speedPosY = 1

        this.isJumping = false



        this.init()

    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = 'img/jumper.png'
        this.setListeners()
        this.fall()
        this.initialJump()
    }


    setListeners() {
        document.onkeydown = e => {

            // console.log(this.ctx)
            e.key === this.keys.left ? this.moveLeft() : null
            e.key === this.keys.rigth ? this.moveRigth() : null
        }
    }

    moveLeft() {
        this.jumperPos.x >= 40 ? this.jumperPos.x -= 30 : null // poner cambio de posición bien
    }

    moveRigth() {
        this.jumperPos.x <= 500 - 71 ? this.jumperPos.x += 30 : null // poner cambio de posición bien
        // vamos a meter una imagen directamente
    }

    drawJumper() {
        this.ctx.drawImage(this.imageInstance, this.jumperPos.x, this.jumperPos.y, this.jumperSize.w, this.jumperSize.h)
        // this.ctx.fillStyle = 'red'
        // this.ctx.fillRect(this.jumperPos.x, this.jumperPos.y, this.jumperSize.w, this.jumperSize.h)
    }

    initialJump() {
        this.gravity = 0.2
        this.isJumping = true
        this.jumperPos.y -= 10
        this.speedPosY -= 15

    }

    jump() {
        this.isJumping = true
        if (this.jumperPos.y < 150) {
            this.gravity = 1.1
            this.speedPosY = 0
            this.jumperPos.y += 30
        } else {
            this.gravity = .2
            this.speedPosY = -10
            this.jumperPos.y -= 10
        }

    }


    bigJump() {
        this.isJumping = true
        if (this.jumperPos.y < 150) {
            this.gravity = 1.1
            this.speedPosY = 0
            this.jumperPos.y += 15
        } else {
            this.gravity = 0.08
            this.speedPosY = -5
            this.jumperPos.y -= 5
        }
    }

    checkJump() {
        if (this.speedPosY >= 5) {
            //console.log(this.speedPosY, this.jumperPos.y)
            //console.log(this.jumperPos.y, this.isJumping)
            this.isJumping = false
        }
    }
    fall() {

        this.jumperPos.y += this.speedPosY
        this.speedPosY += this.gravity

    }


}



    //    if  (si hay una colisión por arriba) {
    //     this.initialJump()
    //     this.platform.platformSpeed += 20
    //    } else {
    //        this.game.gameOver()
    //    }



