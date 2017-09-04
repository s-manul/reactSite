import React from 'react';
import {Helmet} from 'react-helmet';

import FAQContent from '../components/FAQContent';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default class FAQ extends React.Component {

    render() {
        return (
            <div>
                <Helmet
                    title='closedCLub F.A.Q.'
                />
                <Header addMenu={false}/>
                <FAQContent/>
                <Footer addMenu={false}/>
            </div>
        );
    }
}