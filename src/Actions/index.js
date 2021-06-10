export const setUsers2 = () => {
    return {
    type: 'setUsers2'
    }
    };

export const setFavs = () => {
    return {
        type: 'setFavs'
    }
};

export const setData = (item) => {
    return {
        type: 'setData',
        payload: item
    }
};