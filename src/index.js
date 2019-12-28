import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainComponent from './root-layout/dashboard';

const Dashboard = () => {
    return (
        <React.Fragment>
            <MainComponent />
        </React.Fragment>
    )
}


ReactDOM.render(<Dashboard />, document.querySelector('#root'));