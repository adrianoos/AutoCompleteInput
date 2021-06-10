const tableType = ( state = 'A' , action ) => {
    switch (action.type) {
    case 'setTableType' :
    if (state === 'A') {
     state = 'B'
    } else if ( state === 'B') {
     state = 'A'
    }
    return state

    default: 
    return state
    }}

    export default tableType;

