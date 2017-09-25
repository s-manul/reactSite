import React from 'react';
import {Helmet} from 'react-helmet';

import Footer from '../components/Footer';
import Grid from 'react-bootstrap/lib/Grid';
import Header from '../components/Header';
import {Link} from 'react-router-dom';

import '../../styles/noMatch.scss';

export default class NoMatch extends React.Component {

    render() {
        return (
            <div>
                <Helmet
                    title='404'
                    meta={[{name: 'viewport', content: 'width=980, user-scalable=yes, initial-scale=1.0, maximum-scale=5.0, minimum-scale=0.25'}]}
                />
                <Header addMenu={false}/>
                <Grid>
                    <div className='img-cover image-404'>
                        <div style={{position: 'relative', top: 300}}>
                            <h1>Извините, данная страница не существует</h1>
                            <div className='btn-wrapper text-center'>
                                <Link className='btn-custom btn-custom--whole-rounded btn-custom--gold text-uppercase' to='/'>На главную страницу</Link>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Footer addMenu={false}/>
            </div>
        );
    }
}