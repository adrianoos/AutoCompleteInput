
const initialState = {
    input: '',
    markUp: '',
    filteredUsers: []
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
        case 'setFilteredUsers': {
            return {
              ...state,
              filteredUsers: action.payload,
            }
          }

    default:
    return state
    }
};

    export default reduxState;