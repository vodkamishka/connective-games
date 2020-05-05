import View from "./view";
import Model from "./model";

const view  = new View();
const model = new Model();

export default class Controller {
    constructor (view, model) {
        this.model = model;
        this.view = view;
        this.init();
    }
    init() {
        this.subscribe();
        this.paint();
        this.moveBalls();
    }
    paint = () => this.model.paint();
    subscribe = () => this.model.subscribe(this.view.paint);
    moveBalls = () => this.view.moveBalls(this.model.moveBalls);
}

new Controller(view, model);