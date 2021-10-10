import { createStore } from "redux";

const initialState = {
    submit: false,
    filter: 'orgs',
    filterText: '',
}

function reducer (state = initialState, action) {

    if(action.type === 'CHANGE_INPUT'){
        return {
            ...state,
            ...action.change
        }
    }
    else if(action.type === 'SUBMIT_FILTER'){
        return {
            ...state,
            submit: true
        }
    }
    else if(action.type === 'SUBMITED_fILTER'){
        return {
            ...state,
            submit: false
        }
    }

    return state;
}

const store = createStore(reducer);

export default store