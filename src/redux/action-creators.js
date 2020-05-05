import {PAINT_BALLS, ADD_COLOR, MOVE_BALLS} from  './actions';

const createBalls = () => ({type: PAINT_BALLS});
const addColor = () => ({type: ADD_COLOR});
const moveBalls = (data) => ({type: MOVE_BALLS, amount: data})

export {createBalls, addColor, moveBalls};