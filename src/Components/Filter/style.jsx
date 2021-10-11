import styled from "styled-components";

export const WrapperData = styled.div`
    display: flex;
    flex-direction: row;
    @media(max-width: 640px) {
        flex-direction: column;
    }
`;

export const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: #000;
    color: #fff;
    border: none;
    border-radius: 8px;
`;


export const WrapperInput = styled.div`
    padding: 0px 0px 8px 8px;
    width: 100%;
    @media(max-width: 640px) {
        padding: 0px 0px 8px 0px;
    }
`;

export const InputLabel = styled.label`
    display: block;
    line-height: 28px;
`;

export const Input = styled.input`
    width: 100%;
    padding: 6px;
`;