import styled from "styled-components";

export const WrapperSelect = styled.div`
    padding: 0px 0px 8px 0px;
    min-width: 115px;
    @media(max-width: 640px) {
        width: 100%;
        padding: 0px!important;
    }
`;

export const InputLabel = styled.label`
    display: block;
    line-height: 28px;
    @media(max-width: 640px) {
        line-height: 20px;
    }
`;

export const Select = styled.select`
    padding: 6px;
    min-width:100%;
    @media(max-width: 640px) {
        width: 100%;
    }
`;