import React from 'react';
import { ContentWrapper, Header, Footer } from './style'

const PageWrapper = ({ children }) => {

    return (
        <>
            <Header>
                    Pesquisas por repositório
            </Header>
            <ContentWrapper>
                {children}
            </ContentWrapper>
            <Footer>
                2021
            </Footer>
        </>
    )
}

export default PageWrapper;