import React from 'react';
import {WrapperSelect, InputLabel, Select} from './style';

const SelectForm = ({label, name, value, options, change, style}) => {

    return (
        <WrapperSelect style={style}>
            <InputLabel htmlFor={name}>
                {label}
            </InputLabel>
            <Select name={name} id={name} onChange={(e) => {change(e)}} value={value}>
                {
                    options.map((item, key) => {
                        return (
                            <option value={item.value} key={key}>{item.name}</option>
                        )
                    })
                }
            </Select>
        </WrapperSelect>
    )
}

export default SelectForm;