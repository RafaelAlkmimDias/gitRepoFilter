
export const changeInput = (e, dispatch) => {
    const obj ={
        type: 'CHANGE_INPUT',
        change:{}
    }
    obj['change'][e.target.name] = e.target.value;
    
    dispatch(obj);
}

export const submitFilter = (dispatch) => {
    const obj = {
        type: 'SUBMIT_FILTER'
    };

    dispatch(obj);
}

export const submitedFilter = () => {
    return{
        type: 'SUBMITED_fILTER'
    };
}