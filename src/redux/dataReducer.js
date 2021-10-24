import {Type} from './types'

// Action Types



// Action Creators





// reducer

const initialState = {
  news:[],
  weather:{}

  
  
}


function dataReducer(state = initialState, action) {
 console.log(action.payload,"act")
  switch (action.type) {
    case Type.STORE_NEWS:
    
    return{
      ...state,news:[...action.payload]
    
     
    
    }
   case Type.STORE_WEATHER:
     return{
       ...state,weather:{...action.payload}
      
     }
    
 
    

    default:
      return state
  }
  
}

export default dataReducer