import React from 'react';
import Clearfix from 'react-bootstrap/lib/Clearfix';
import Col from 'react-bootstrap/lib/Col';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Scroll from 'react-scroll';
import '../../styles/benefits.scss';

//images
import growth from '../../images/growth.png';
import moneyBag from '../../images/money-bag.png';
import refresh from '../../images/refresh.png';
import shield from '../../images/shield.png';

const benefits = [
    {
        img: {src: moneyBag, alt: 'Мешок денег'},
        title: 'Выгодные условия',
        text: 'Лучшее соотношение цены и качества'
    },
    {
        img: {src: growth, alt: 'График'},
        title: 'Постоянный прирост банка',
        text: 'Высокая проходимость прогнозов позволит вам действительно получить прибыль'
    },
    {
        img: {src: shield, alt: 'Щит'},
        title: 'Верификация прогнозов',
        text: 'Прогнозы заносятся в верификатор. Все открыто и честно'
    },
    {
        img: {src: refresh, alt: 'Цикл'},
        title: 'Бесплатная замена прогноза',
        text: 'Вы получаете бесплатную замену прогноза в случае поражения'
    },
];

export default class Benefits extends React.Component {

    benefitsBlockRender = () => {
        let i = 0;
        const length = benefits.length;
        const arr = [];
        while (true) {
            if (i > length - 1) break;
            const item = benefits[i];
            let className = '';
            if (i < length - 2) {
                className = 'benefits-block';
            } else if (i === length - 2) {
                className = 'benefits-block benefits-block--preLast';
            }
            arr.push(
                <Col
                    key={i}
                    sm={6}
                    className={className}
                >
                    <img className='img-responsive center-block' src={item.img.src} alt={item.img.alt}/>
                    <h4 className='text-center'>{item.title}</h4>
                    <p className='text-center'>{item.text}</p>
                </Col>
            );
            if (i % 2 === 1 && i < length - 1) {
                arr.push(<Clearfix key={'clearfix' + i}/>);
            }
            i++;
        }

        return (
            <Row>
                {arr}
            </Row>
        );
    };

    render() {
        return (
            <Scroll.Element name='benefits'>
                <div className='background content-block'>
                    <Grid>
                        <h2 className='text-center text-uppercase title'>Наши преимущества</h2>
                        {this.benefitsBlockRender()}
                    </Grid>
                </div>
            </Scroll.Element>
        );
    }
}

