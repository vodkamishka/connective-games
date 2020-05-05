const canvas  = document.getElementById("canvas");

const app = new PIXI.Application({
    view: canvas,
    width: 510,
    height: 510
})

export default class Ball {
    constructor ({x, y, color}) {
        this.x = x;
        this.y = y;
        this.colors = ['blue', 'green', 'grey', 'orange', 'purple', 'red', 'yellow'];
        this.color = this.colors[color];
        this.init();
    }
    init() {
        this.paint();
    }
    paint () {
        const texture = new PIXI.Texture.from(`img/${this.color}.png`);
        const img = new PIXI.Sprite(texture);
        img.x = this.x*50 ;
        img.y = this.y*50 ;
       
        
        app.stage.addChild(img);
    }
    
    
}



