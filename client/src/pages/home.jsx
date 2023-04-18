import React, { Fragment} from 'react';
import Cards from '../components/cards';
import Navbar from '../components/navbar';

const Home = () => {

    return (
        <Fragment>
            <Navbar/>
            <Cards/>
        </Fragment>
    )
}

export default Home