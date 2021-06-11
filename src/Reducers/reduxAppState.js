
const initialState = {
    input: '',
    markUp: ''
}

const reduxState = ( state = initialState , action ) => {

    switch (action.type) {
        case 'setInput': {
          return {
            ...state,
            input: action.payload,
          }
        }
        case 'setMarkUp': {
            return {
              ...state,
              markUp: action.payload,
            }
          }

    default:
    return state
    }}

    export default reduxState;