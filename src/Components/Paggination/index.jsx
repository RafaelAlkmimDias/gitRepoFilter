import React from 'react'
import SelectForm from '../SelectForm';
import { CardWrapperRow, Row } from '../style'

import { connect } from 'react-redux';
import { changeInput } from '../../Redux/Store/action'

const Paggination = ({order, orderBy, page, maxPage, nPage, dispatch}) => {

    const ordernarOptions = [
        {value: 'name', name: 'Nome'},
        {value: 'language', name: 'Linguagem'},
        {value: 'updated_at', name: 'Commit'},
        {value: 'created_at', name: 'Criação'},
    ]
    const ordemOptions = [
        {value: 'crescente', name:"Crescente"},
        {value: 'decrescente', name:"Decrescente"},
    ]
    const numberOptions = [
        {value: '10', name:"10"},
        {value: '20', name:"20"},
        {value: '50', name:"50"},
    ]
    const pageOptions = Array(maxPage).fill(0).map((item,i) => {return {value: i+1, name: i+1}})

    const change = (e) => { 
        changeInput(e, dispatch) 
    }
    

    return (
        <CardWrapperRow>
            <Row>
                <SelectForm
                    label="Ordernar por:"
                    name="orderBy"
                    value={orderBy}
                    options={ordernarOptions}
                    change={change}
                />
                <SelectForm
                    label="Ordem:"
                    name="order"
                    value={order}
                    options={ordemOptions}
                    change={change}
                    style={{padding: '0px 0px 0px 8px'}}
                />
            </Row>
            <Row>
                <SelectForm
                    label="Repositórios por página:"
                    name="nPage"
                    value={nPage}
                    options={numberOptions}
                    change={change}
                />
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
    )
}

export default connect( state => ({ 
    order: state.order, 
    orderBy: state.orderBy, 
    page: state.page, 
    maxPage: state.maxPage,
    nPage: state.nPage,
}) )(Paggination);