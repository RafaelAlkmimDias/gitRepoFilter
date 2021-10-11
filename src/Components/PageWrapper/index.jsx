import React from 'react';
import { ContentWrapper, Header, Footer } from './style'

const PageWrapper = ({ children }) => {

    return (
        <>
            <Header>
                    Pesquisar repositório
            </Header>
            <ContentWrapper>
                {children}
            </ContentWrapper>
            <Footer>
                Desenvolvido por Rafael em 2021
            </Footer>
        </>
    )
}

export default PageWrapper;