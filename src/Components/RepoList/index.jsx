import React, { useState, useEffect } from 'react';
import { getRepoList } from '../../Services/api'
import RepoCards from '../RepoCards';

import { connect } from 'react-redux';
import { submitedFilter } from '../../Redux/Store/action'

import { Wrapper } from './style'

const RepoList = ({ submit, filter, filterText, dispatch }) => {

    const [list, setList] = useState([]);

    const updateList = async () => {
        let newList = await getRepoList(filter, filterText);
        setList(newList);
        dispatch(submitedFilter())
    }

    useEffect(() => {
        if(submit){
            updateList()
        }
    }, [ submit ])

    return (
        <Wrapper>
            {list.map(item => (
                <RepoCards item={item} key={item.id}/>
            ))}
        </Wrapper>
    )

}

export default connect( state => ({ submit: state.submit, filter: state.filter, filterText: state.filterText}) )(RepoList);