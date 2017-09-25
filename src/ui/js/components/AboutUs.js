import React from 'react';
import Col from 'react-bootstrap/lib/Col';
import Grid from 'react-bootstrap/lib/Grid';
import notebook from '../../images/notebook.png'
import Row from 'react-bootstrap/lib/Row';
import Scroll from 'react-scroll';

export default class AboutUs extends React.Component {

    render() {
        return (
            <Scroll.Element name='aboutUs'>
                <div className='content-block aboutUs'>
                    <Grid>
                        <h2 className='text-center text-uppercase title'>О нас</h2>
                        <Row>
                            <Col sm={6}>
                                <img
                                    className='img-responsive center-block'
                                    src={notebook}
                                    alt='Ноутбук'
                                />
                            </Col>

                            <Col sm={6}>
                                <p>Наша команда аналитиков занимается прогнозами на спортивные события более 8 лет. Наши прогнозы основываются на обработке огромного количества статистических данных, информации из закрытых источников и многолетнего опыта наших аналитиков. Мы даем уверенные прогнозы, на которые ставим сами, и получаем прибыль не первый год. Вся статистика привязана к верификатору, где вы сможете ее посмотреть. Будь с нами и получай стабильный дополнительный доход.</p>
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </Scroll.Element>
        );
    }

}

