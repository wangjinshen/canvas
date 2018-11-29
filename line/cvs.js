class Xy {
    constructor(params, arrX, arrY) {
        this.context = document.querySelector(params).getContext('2d');
        this.y = 500;
        this.x = 800;
        this.arrX = arrX;
        this.arrY = arrY
        this.init()
        this.dir()
        this.dirX()
        this.dirY()
    }
    init() {
        let context = this.context
        context.translate(50, 450);
    }
    dir() {
        let x = this.x
        let y = this.y
        let context = this.context
        context.beginPath();
        context.moveTo(0, 0);
        context.lineTo(0, -420);
        context.moveTo(0, 0);
        context.lineTo(720, 0);
        context.stroke();
    }
    dirX() {
        let x = this.x
        let y = this.y
        let arrX = this.arrX
        let context = this.context
        let xbl = 700 / arrX.length
        context.textAlign = 'center';

        for (let i = 1; i <= arrX.length; i++) {
            context.beginPath();
            context.moveTo(i * xbl, -0);
            context.lineTo(i * xbl, 10);
            context.fillText(arrX[i - 1], i * xbl, 20);
            context.stroke();
        }
        context.stroke();
    }
    dirY() {
        let arrY = this.arrY/*  */
        let x = this.x
        let y = this.y
        let max = Math.max.apply(null, arrY)
        let scale = max / 400
        let context = this.context
        let xbl = 400 / arrY.length
        context.textAlign = 'center';
        for (let i = 0; i <= arrY.length; i++) {
            context.beginPath();
            context.moveTo(0, -i * xbl);
            context.lineTo(-10, -i * xbl);
            context.fillText(Math.ceil(xbl * scale * i), -20, -i * xbl);
            context.stroke();
        }
        context.stroke();
    }
}