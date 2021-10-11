import React from 'react'
import {Button, WrapperInput, InputLabel, Input, WrapperData} from './style';
import { CardWrapper } from '../style'
import SelectForm from '../SelectForm';

import { connect } from 'react-redux';
import { submitFilter, changeInput } from '../../Redux/Store/action'

const Filter = ({ filter, filterText, dispatch }) => {

    const filterOptions = [
        {value: "orgs", name:'Organização'},
        {value: "users", name:'Usuário'},
    ]

    const change = (e) => { 
        changeInput(e, dispatch) 
    }

    return(
        <CardWrapper>
            <WrapperData>
                <SelectForm
                    label="Pesquisar por:"
                    name="filter"
                    value={filter}
                    options={filterOptions}
                    change={change}
                />

                <WrapperInput>
                    <InputLabel htmlFor="filterText">
                        Pesquisar:
                    </InputLabel>
                    <Input 
                        type="text" 
                        name="filterText"
                        id="filterText"
                        value={filterText}
                        onChange={(e) => changeInput(e, dispatch)}
                    />
                </WrapperInput>
            </WrapperData>
            <Button onClick={() => submitFilter(dispatch) } >
                Pesquisar    
            </Button>

        </CardWrapper>
    )
}

export default connect( state => ({ filter: state.filter , filterText: state.filterText }) )(Filter);