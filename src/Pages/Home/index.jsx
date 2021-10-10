import React from "react";
import Filter from '../../Components/Filter'

import { Provider } from "react-redux";
import Store from '../../Redux/Store/index';
import RepoList from "../../Components/RepoList";

const Home = () => {

    return (
        <div>
            <Provider store={Store}>
                <Filter />
                <RepoList />
            </Provider>
        </div>
    )
}

export default Home;