import React, { useState } from 'react'
import {Button, WrapperInput, InputLabel, Input, WrapperData} from './style';
import { CardWrapper } from '../style'
import SelectForm from '../SelectForm';

import { connect } from 'react-redux';
import { submitFilter } from '../../Redux/Store/action'

const Filter = ({ filter, filterText, dispatch, language }) => {

    const filterOptions = [
        {value: "orgs", name:'Organização'},
        {value: "users", name:'Usuário'},
        {value: "language", name:'Linguagem'}
    ]
    const languageOptions = [
        {value: "c", name:'C'},
        {value: "c++", name:'C++'},
        {value: "c#", name:'C#'},
        {value: "css", name:'CSS'},
        {value: "go", name:'Go'},
        {value: "html", name:'HTML'},
        {value: "java", name:'Java'},
        {value: "javascript", name:'Javascript'},
        {value: "php", name:'PHP'},
        {value: "python", name:'Python'},
        {value: "ruby", name:'Ruby'},
        {value: "scala", name:'Scala'},
        {value: "typescript", name:'Typescript'},
    ]

    const [value, setValue] = useState({
        filter: filter,
        filterText: filterText,
        language: language,
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

                { value.filter === 'language' &&(<SelectForm
                    label="Linguagem:"
                    name="language"
                    value={value.laguage}
                    options={languageOptions}
                    change={change}
                    style={{paddingLeft: "8px"}}
                />)}

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

export default connect( state => ({ filter: state.filter , filterText: state.filterText, language: state.language }) )(Filter);