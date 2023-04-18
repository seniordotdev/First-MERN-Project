import React, { Fragment, } from 'react';
import { Route, Routes } from 'react-router-dom';
import Create from './components/create';
import Update from './components/update';
import Home from './pages/home';

const App = () => {

    return (
        <Fragment>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/add' element={<Create/>}/>
                <Route path='/update/:id' element={<Update/>}/>
            </Routes>
        </Fragment>
    )
}

export default App