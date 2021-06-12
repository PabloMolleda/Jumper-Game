class Jumper {
    constructor(ctx, keys) {

        this.ctx = ctx
        this.jumperPos = { x: 250, y: 350 }
        this.jumperSize = { w: 20, h: 20 }
        this.keys = keys
        this.imageInstance = undefined
        this.setListeners()

        this.init()

    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.scr = '$$'
    }


    setListeners() {
        document.onkeydown = e => {
            e.key === this.keys.left ? this.jumperCtx.moveLeft() : null
            e.key === this.keys.rigth ? this.jumperCtx.moveRigth() : null
        }
    }

    moveLeft() {
        this.jumperPos.x -= 20 // poner cambio de posición bien
    }

    moveRigth() {
        this.jumperPos.y += 20 // poner cambio de posición bien

        // vamos a meter una imagen directamente
    }

    drawJumper() {
        this.ctx.drawImage(this.imageInstance, this.jumperPos.x, this.jumperPos.y, this.jumperSize.w, this.jumperSize.h)
    } 

    // this.imageInstance, this.jumperPos.x, this.jumperPos.y, this.jumperSize.w, this.jumperSize.h

}