import React, { useState, useEffect } from 'react';
import { getRepoList } from '../../Services/api'
import RepoCards from '../RepoCards';
import { connect } from 'react-redux';
import { submitedFilter, updateState } from '../../Redux/Store/action'
import { Wrapper } from './style'
import { FaSpinner } from 'react-icons/fa';


const RepoList = ({ 
    submit, 
    filter, 
    filterText, 
    page,
    direction,
    sort,
    per_page,
    dispatch 
}) => {

    const [list, setList] = useState([]);
    const [submited, setSubmited] = useState(false);
    const [loading, setLoading] = useState(false);

    const pagginationParameter = `?per_page=${per_page}&page=${page}&sort=${sort}&direction=${direction}`

    const updateList = async () => {
        setLoading(true)
        let newList = await getRepoList(filter, filterText, pagginationParameter);
        setLoading(false)
        setList(newList);
        if(submit){
            submitedFilter(dispatch)
            setSubmited(true)
        }
    }

    useEffect(() => { if(submit){ updateList(); } }, [submit])
    useEffect(() => { if(submited){ updateList(); } }, [page, direction, sort, per_page])

    const status = () => {
        if(loading) {return (<FaSpinner icon="spinner" className="spinner" style={{fontSize:'40px'}}/>)}
        else if(submited){ return "Não foi encontrado nenhum repositório"}
    }

    return (
        <Wrapper>
            {
                (Boolean(list.length))  ?
                list.map(item => (
                    <RepoCards item={item} key={item.id}/>
                ))
                :
                (
                    <div style={{textAlign: 'center', lineHeight: '100px'}}>
                        {status()}
                    </div>
                )
            }
        </Wrapper>
    )

}

export default connect( state => ({ 
    submit: state.submit, 
    filter: state.filter, 
    filterText: state.filterText,
    page: state.page,
    direction: state.direction,
    sort: state.sort,
    per_page: state.per_page,
}) )(RepoList);