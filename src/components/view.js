import Ball from './ball';

export default class View {
    constructor () {
        
    }
    paint = data => data.balls.forEach(ball => ball.forEach(el => new Ball(el)));
    moveBalls = (dispatchMoveBalls) => {

        let x, y, x2, y2, downX, downY, upX, upY;
        canvas.addEventListener('mousedown', (e) => {
            downX = e.pageX;
            downY = e.pageY;
            x = Math.floor(e.pageX/50);
            y = Math.floor(e.pageY/50);
           
        })
        canvas.addEventListener('mouseup', (e) => {
            upX = e.pageX;
            upY = e.pageY;
            x2 = Math.floor(e.pageX/50);
            y2 = Math.floor(e.pageY/50);
            if (x !== x2 || y !== y2) {
                dispatchMoveBalls({downX, downY, upX, upY});
            }
          
        }) 
        
    }
}