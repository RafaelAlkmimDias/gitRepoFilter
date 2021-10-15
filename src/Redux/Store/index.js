import { createStore } from "redux";

const initialState = {
    submit: false,
    filter: 'orgs',
    filterText: '',
    paggination: false,
    page: 0,
    maxPage: 1,
    direction: 'asc',
    sort: 'full_name',
    language: 'c',
    per_page: 10,
}

function reducer (state = initialState, action) {

    if(action.type === 'CHANGE_INPUT'){
        return {
            ...state,
            ...action.change
        }
    }
    else if(action.type === 'SUBMIT_FILTER'){
        let paggination = action.change.filter === 'language' ? {sort: 'updated'} : {sort: 'full_name'};
        return {
            ...state,
            ...action.change,
            ...paggination,
            page: 1,
            submit: true
        }
    }
    else if(action.type === 'SUBMITED_fILTER'){
        return {
            ...state,
            submit: false
        }
    }
    else if(action.type === 'UPDATE_STATE'){
        return {
            ...state,
            ...action.update
        }
    }

    return state;
}

const store = createStore(reducer);

export default store