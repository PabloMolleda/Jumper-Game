class Jumper {
    constructor(ctx, jumperPosX, jumperPosY, jumperWidth, jumperHeight, keys) {

        this.ctx = ctx
        this.jumperPos = { x: jumperPosX, y: jumperPosY }
        this.jumperSize = { w: jumperWidth, h: jumperHeight }
        this.keys = keys
        this.imageInstance = undefined
        

        this.init()

    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.scr = '$$'
        this.setListeners()
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

    // this.imageInstance, this.jumperPos.x, this.jumperPos.y, this.jumperSize.w, this.jumperSize.h

}