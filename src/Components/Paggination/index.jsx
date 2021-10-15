import React, {useEffect, useState} from 'react'
import SelectForm from '../SelectForm';
import { CardWrapperRow, Row } from '../style'

import { connect } from 'react-redux';
import { changeInput, updateState } from '../../Redux/Store/action'
import { getRepoTotalNumber, getRepoTotalNumberLanguage } from '../../Services/api'

const Paggination = ({direction, sort, page, maxPage, per_page, submit, filter, filterText,language, dispatch}) => {

    const ordernarOptions = filter !== 'language' ?[
        {value: 'full_name', name: 'Nome'},
        {value: 'updated', name: 'Commit'},
        {value: 'created', name: 'Criação'},
    ] :
    [
        {value: 'updated', name: 'atualização'},
        {value: 'stars', name: 'estrelas'},
        {value: 'forks', name: 'forks'},
    ];

    const ordemOptions = [
        {value: 'asc', name:"Crescente"},
        {value: 'desc', name:"Decrescente"},
    ]
    const numberOptions = [
        {value: '10', name:"10"},
        {value: '20', name:"20"},
        {value: '50', name:"50"},
    ];
    const pageOptions = Array(maxPage).fill(0).map((item,i) => {return {value: i+1, name: i+1}})

    
    const [repoTotal, setRepoTotal] = useState(0)
    const [showPaggination, setShowPaggination] = useState(false)

    const change = (e) => { 
        changeInput(e, dispatch) 
    }

    const updateRepoTotal = async() => {

        let number =  filter !== 'language' ? await getRepoTotalNumber(filter, filterText) : await getRepoTotalNumberLanguage(filterText, language);
        setRepoTotal(number)
        setShowPaggination(Boolean(number));
    }

    const updateNumberOfPages = () => {
        let pageNumber = Math.ceil(repoTotal/per_page) >= 1 ? Math.ceil(repoTotal/per_page) : 1
        updateState({ maxPage: pageNumber, page:1 }, dispatch)
    }

    useEffect( () => { if(submit){ updateRepoTotal() } },[submit])
    useEffect( () => { updateNumberOfPages() },[repoTotal,per_page])
    

    return (
        <>
            {showPaggination &&
                (<CardWrapperRow>
                    <Row>
                        <SelectForm
                            label="Ordernar por:"
                            name="sort"
                            value={sort}
                            options={ordernarOptions}
                            change={change}
                        />
                        <SelectForm
                            label="Ordem:"
                            name="direction"
                            value={direction}
                            options={ordemOptions}
                            change={change}
                            style={{padding: '0px 0px 0px 8px'}}
                        />
                    </Row>
                    <Row>
                        { filter !=='language' && (<SelectForm
                            label="Repositórios por página:"
                            name="per_page"
                            value={per_page}
                            options={numberOptions}
                            change={change}
                        />)}
                        <SelectForm
                            label="Página:"
                            name="page"
                            value={page}
                            options={pageOptions}
                            change={change}
                            style={{padding: '0px 0px 0px 8px'}}
                        />
                    </Row>
                </CardWrapperRow>
            )}
        </>
    )
}

export default connect( state => ({ 
    direction: state.direction, 
    sort: state.sort, 
    page: state.page, 
    maxPage: state.maxPage,
    per_page: state.per_page,
    submit: state.submit,
    filter: state.filter,
    filterText: state.filterText,
    language: state.language,
}) )(Paggination);