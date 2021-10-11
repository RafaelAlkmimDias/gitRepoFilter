import styled from "styled-components";

export const CardWrapper = styled.div`
    padding: 20px;
    border: 1px solid #d0d7de;
    border-radius: 7px;
    background-color: #fff;
    @media(max-width: 640px){
        padding: 10px;
    }
`;

export const CardWrapperRow = styled(CardWrapper)`
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    @media(max-width: 640px){
        flex-direction: column
    }
`;

export const Row = styled.div`
    display: flex;
    @media(max-width: 640px){
        flex-direction: column
    }
`;