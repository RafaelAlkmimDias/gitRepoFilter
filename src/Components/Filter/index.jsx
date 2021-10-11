import React from 'react'
import {Wrapper, Button, WrapperInput, InputLabel, Input, Select, WrapperData, WrapperSelect} from './style';

import { connect } from 'react-redux';
import { submitFilter, changeInput } from '../../Redux/Store/action'

const Filter = ({ filter, filterText, dispatch }) => {

    const onTextChange = (e) => {
        dispatch(changeInput(e.target.name, e.target.value))
    }
    const onSelectChange = (e) => {
        dispatch(changeInput(e.target.name, e.target.value))
    }

    const submit = () => {
        dispatch(submitFilter())
    }

    return(
        <Wrapper>
            <WrapperData>
                <WrapperSelect>
                    <InputLabel htmlFor="filter">
                        Pesquisar por:
                    </InputLabel>
                    <Select name="filter" id="filter" onChange={onSelectChange} value={filter}>
                        <option value="orgs"> Organização </option>
                        <option value="users"> Usuário </option>
                    </Select>
                </WrapperSelect>

                <WrapperInput>
                    <InputLabel htmlFor="filterText">
                        Pesquisar:
                    </InputLabel>
                    <Input 
                        type="text" 
                        name="filterText"
                        id="filterText"
                        value={filterText}
                        onChange={onTextChange}
                    />
                </WrapperInput>
            </WrapperData>
            <Button onClick={() => submit() } >
                Pesquisar    
            </Button>

        </Wrapper>
    )
}

export default connect( state => ({ filter: state.filter , filterText: state.filterText }) )(Filter);