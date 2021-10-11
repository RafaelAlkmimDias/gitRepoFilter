import React, { useState } from 'react'
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

    const [value, setValue] = useState({
        filter: filter,
        filterText: filterText
    })

    const submit = () => {
        submitFilter(value, dispatch)
    }

    const change = (e) => { 
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }

    return(
        <CardWrapper>
            <WrapperData>
                <SelectForm
                    label="Pesquisar por:"
                    name="filter"
                    value={value.filter}
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
                        value={value.filterText}
                        onChange={change}
                    />
                </WrapperInput>
            </WrapperData>
            <Button onClick={submit} >
                Pesquisar    
            </Button>

        </CardWrapper>
    )
}

export default connect( state => ({ filter: state.filter , filterText: state.filterText }) )(Filter);