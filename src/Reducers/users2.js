const users2 = ( state = false , action ) => {
    switch (action.type) {
    case 'setUsers2' :
    return !state
    default:
    return state
    }}

    export default users2;