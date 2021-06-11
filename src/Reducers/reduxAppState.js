
const initialState = {input: ''}

const reduxState = ( state = initialState , action ) => {

    switch (action.type) {
        case 'setInput': {
          return {
            ...state,
            input: action.payload,
          }
        }
    default:
    return state
    }}

    export default reduxState;


