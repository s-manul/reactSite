import React from 'react';

import Col from 'react-bootstrap/lib/Col';
import Grid from 'react-bootstrap/lib/Grid';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Row from 'react-bootstrap/lib/Row';
import Scroll from 'react-scroll';
import {scroller} from 'react-scroll';
import '../../styles/mainImage.scss';


export default class MainImage extends React.Component {

    onClick = (e) => {
        e.preventDefault();
        scroller.scrollTo('proposals',{
            duration: 500,
            smooth: true,
            offset: -50
        });
    };

    render() {
        return (
            <Scroll.Element name='mainImage'>
                <Jumbotron className='main-image img-cover'>
                    <Grid>
                        <Row>
                            <Col sm={7}>
                                <h1>Начни зарабатывать уже сегодня</h1>
                                <p>Лучшие прогнозы на спортивные события по выгодным условиям</p>
                                <a
                                    className='btn-custom btn-custom--whole-rounded btn-custom--gold text-uppercase'
                                    href='/'
                                    onClick={this.onClick}
                                >
                                    Подробнее
                                </a>
                            </Col>
                        </Row>
                    </Grid>
                </Jumbotron>
            </Scroll.Element>
        );
    }
}

