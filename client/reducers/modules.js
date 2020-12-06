import { INCREASE_LIKES, SET_MODULES, DECREASE_LIKES} from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MODULES:
      return action.modules

    case INCREASE_LIKES:
      return state.map((module)=>{
        if(module.id === action.module.id)
        {
          module.likes = module.likes +1
        }
        return module
      })

    case DECREASE_LIKES:
      return state.map((module)=>{
        if(module.id === action.module.id)
        {
          module.likes = module.likes -1
        }
        return module
      })

    default:
      return state
  }
}

export default reducer


