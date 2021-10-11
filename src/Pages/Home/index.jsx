import React from "react";
import Filter from '../../Components/Filter'

import { Provider } from "react-redux";
import Store from '../../Redux/Store/index';
import RepoList from "../../Components/RepoList";
import PageWrapper from '../../Components/PageWrapper'

const Home = () => {

    return (
        <PageWrapper>
            <Provider store={Store}>
                <Filter />
                <RepoList />
            </Provider>
        </PageWrapper>
    )
}

export default Home;