


const randomColor = () => Math.floor(Math.random() * 6)

const checkColorBalls = (balls, x, y, color) => {
  let flag = true;
      if (x > 1 && color === balls[x-1][y].color && balls[x-1][y].color === balls[x-2][y].color) flag = false;
      if (y > 1 && color === balls[x][y-1].color && balls[x][y-1].color === balls[x][y-2].color) flag = false;
  return flag;
}

const initialState = {
  balls: []
}

const reducer = (action, state = initialState) => {

    switch (action.type){

      case 'CREATE_BALLS':
          let balls = []
          for (let x = 0; x < 10; x ++) {
              balls[x] = [];
              for (let y = 0; y < 10; y++) {
                balls[x][y] = {x, y};
              }
          }
         
        return {
          ...state,
          balls
        };   

      case 'ADD_COLOR':
        let colorsBalls = [...state.balls]
        for (let x = 0; x < 10; x++){
          for (let y = 0; y < 10; y++) {
            while (true) {
              let color = randomColor(); 
                if (checkColorBalls(colorsBalls, x,y, color)) {
                  colorsBalls[x][y].color = color;
                  break;
              }
            } 
          }
        }
        return {
          ...state,
          balls: colorsBalls
        };

      

      case 'MOVE_BALLS': 

        let array = [...state.balls];
       
        let { downX, downY, upX, upY} = action.amount;

        let x = Math.floor(downX/50)
        let y = Math.floor(downY/50)

        const oldPosX = x;
        const oldPosY = y;


        let col = array[x][y].color;
        
        if (upX - downX === 0 && upY - downY === 0) return;
        else if (Math.abs(downX - upX) > Math.abs(downY - upY)) {
          

          if (upX > downX && 
            x < 7 && col === array[x+2][y].color && col === array[x+3][y].color ||
            y > 1 && x < 9 && col === array[x+1][y+1].color && col === array[x+1][y+2].color ||
            y > 0 && x < 9 && y < 9 && col === array[x+1][y+1].color && col === array[x+1][y-1].color ||
            y < 8 && x < 9 && col === array[x+1][y-1].color && col === array[x+1][y-2].color 
          ) {
            
            x +=1
          
          
          }
          else if (upX < downX && 
            x > 2 && col === array[x-2][y].color && col === array[x-3][y].color ||
            y > 1 && x > 0 && col === array[x-1][y+1].color && col === array[x-1][y+2].color ||
            y > 0 && y < 9 && x > 0 && col === array[x-1][y+1].color && col === array[x-1][y-1].color ||
            y< 8 && x > 0 && col === array[x-1][y-1].color && col === array[x-1][y-2].color 
          ) {
            
            x -=1}
          else {return}
        }
        else {
          if (upY > downY  && 
            y < 7 && col === array[x][y+2].color && col=== array[x][y+3].color ||
            x > 1 && y < 9 && col === array[x-1][y+1].color && col === array[x-2][y+1].color ||
            x > 0 && x < 9 && y <9 && col === array[x-1][y+1].color && col === array[x+1][y+1].color ||
            x < 8 && y < 9 && col === array[x+1][y+1].color && col === array[x+2][y+1].color 
          ) {
            
            y +=1}
          else if (upY < downY && 
            y > 2 && col === array[x][y-2].color && col === array[x][y-3].color ||
            x > 1 && y > 0 && col === array[x-1][y-1].color &&col === array[x-2][y-1].color ||
            x > 0 && x < 9 && y > 0 && col === array[x-1][y-1].color && col === array[x+1][y-1].color ||
            x < 8 && y > 0 && col === array[x+1][y-1].color && col === array[x+2][y-1].color 
          ) {
            
            y -=1}
          else {
           
            return
          }
        }
        
       
        let color = array[x][y].color;
       
        array[x][y].color = array[oldPosX][oldPosY].color;
        array[oldPosX][oldPosY].color = color;
      
       
        return {
          ...state,
          balls: array 
      };  
      default:
        return state;
    }
  }


  export default reducer;