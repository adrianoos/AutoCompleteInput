export const setInput = (inputText) => {
    return { type: 'setInput', payload: inputText}
    };

export const setMarkUp = (inputText) => {
    return {type: 'setMarkUp', payload: inputText}
};

export const setFilteredUsers = (array) => {
   return {type: 'setFilteredUsers', payload: array}
};