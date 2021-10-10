
export const changeInput = (key, value) => {
    let change = {};
    change[key] = value;
    return{
        type: 'CHANGE_INPUT',
        change: change
    }
}

export const submitFilter = () => {
    return{
        type: 'SUBMIT_FILTER'
    };
}

export const submitedFilter = () => {
    return{
        type: 'SUBMITED_fILTER'
    };
}