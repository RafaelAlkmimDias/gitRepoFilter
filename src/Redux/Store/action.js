
export const changeInput = (e, dispatch) => {
    const obj = {
        type: 'CHANGE_INPUT',
        change:{
            [e.target.name]: e.target.value
        }
    }
    
    dispatch(obj);
}

export const submitFilter = (value, dispatch) => {
    const obj = {
        type: 'SUBMIT_FILTER',
        change:{
            ...value,
        }
    };

    dispatch(obj);
}

export const submitedFilter = (dispatch) => {
    let obj = {
        type: 'SUBMITED_fILTER'
    };

    dispatch(obj);
}

export const setPaggination = (value, dispatch) => {
    
    let obj = {
        type: 'SET_PAGGINATION',
        paggination: value
    };

    dispatch(obj)
}

export const updateState = (update, dispatch) => {
    
    let obj = {
        type: 'UPDATE_STATE',
        update: {...update}
    };

    dispatch(obj)
}