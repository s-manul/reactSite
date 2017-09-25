import React from 'react';
import {Helmet} from 'react-helmet';

import AboutUs from '../components/AboutUs';
import Benefits from '../components/Benefits';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MainImage from '../components/MainImage';
import Proposals from '../components/Proposals';
import Statistic from '../components/Statistic';

export default class Main extends React.Component {

    render() {
        return (
            <div>
                <Helmet
                    meta={[
                        {name: 'keywords', content: 'прогнозы на матчи, ставки на матчи, ставки и пронозы, TomasBet, купить прогнозы на матчи'},
                        {name: 'Description', content:'TomasBet занимается прогнозами на спортивные события. Вы можете приобрести пакеты прогнозов по низким ценам'},
                    ]}
                    title='Ставки и прогнозы'
                />
                <Header addMenu={true}/>
                <MainImage/>
                <AboutUs/>
                <Benefits/>
                <Statistic/>
                <Proposals/>
                <ContactUs/>
                <Footer addMenu={true}/>
            </div>
        );
    }
}