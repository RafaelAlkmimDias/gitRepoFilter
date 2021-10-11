import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 10px;
    margin: 10px 0px;
    border-top: 1px solid #d0d7de;

    a{
        font-size: 1.17em;
        font-weight: bold;
        text-decoration: none;
    }
    a:hover{
        text-decoration: underline;
    }

`;

export const Description = styled.div`
    padding: 10px 0px;
`;

export const Language = styled.div`
    font-size: 11px;
`;

export const FirstLine = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;