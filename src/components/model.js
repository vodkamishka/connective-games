import createStore from '../redux/create-store';
import reducer from '../redux/reducer';
import {createBalls, addColor, moveBalls} from '../redux/action-creators';

export default class Model {
    constructor () {
       this.init()
    }
    init() {
        this.createStore();
    }
    createStore = () => this.store  = createStore(reducer);
    paint = () => this.store.dispatch([createBalls(), addColor()]);
    getState = () => this.store.getState(); 
    subscribe = viewPaint => this.store.subscribe(() => viewPaint(this.getState()));
    moveBalls = (data) => this.store.dispatch([moveBalls(data)]);
        
    

    
}