import React from 'react';
import Col from 'react-bootstrap/lib/Col';
import Grid from 'react-bootstrap/lib/Grid';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem from 'react-bootstrap/lib/NavItem';
import Row from 'react-bootstrap/lib/Row';
import {scroller} from 'react-scroll';
import '../../styles/footer.scss';

import inst from '../../images/inst.png';
import mail from '../../images/mail.png';
import vk from '../../images/vk.png';

const navMenu = [
    {text: 'Главная', scrollTo: 'mainImage'},
    {text: 'О нас', scrollTo: 'aboutUs'},
    {text: 'Статистика', scrollTo: 'statistic'},
    {text: 'Подписка', scrollTo: 'proposals'},
    {text: 'Помощь', scrollTo: 'contactUs'},
];

export default class Footer extends React.Component {

    footerNavRender = () => {
        const {addMenu} = this.props;
        if (addMenu) {
            return (
                <Col sm={4} lgOffset={1} xsHidden>
                    <Nav>
                        {
                            navMenu.map((item, index) => {
                                return(
                                    <NavItem
                                        key={index}
                                        eventKey={item.scrollTo}
                                        className='footer-nav-element text-uppercase'
                                        href='/'
                                        onSelect={this.onSelect}
                                    >
                                        {item.text}
                                    </NavItem>
                                );
                            })
                        }
                    </Nav>
                </Col>
            );
        }
        return null;
    };

    onSelect = (eventKey, {target}) => {
        scroller.scrollTo(eventKey,{
            duration: 500,
            smooth: true,
            offset: -50
        });
        target.blur();
    };

    render() {
        const {addMenu} = this.props;
        const socialProps = {
            sm: 5,
            lg: 4
        };
        if (!addMenu) {
            socialProps.smOffset = 4;
            socialProps.lgOffset = 5;
        }
        return(
            <footer className='footer'>
                <Grid>
                    <Row>
                        <Col sm={3} xsHidden>
                            <Navbar.Brand className='footer-nav-element'>
                                <a href='/'>closedClub</a>
                            </Navbar.Brand>
                        </Col>
                        {this.footerNavRender()}
                        <Col {...socialProps}>
                            <Nav>
                                <NavItem className='footer__text-center-xs footer-nav-element'>
                                    <img src={mail} alt='mail'/>
                                    <span>closedClub@gmail.com</span>
                                </NavItem>
                                <NavItem className='footer__text-center-xs footer-nav-element'>
                                    <img src={vk} alt='vk'/>
                                    <span>/closedClub</span>
                                </NavItem>
                                <NavItem className='footer__text-center-xs footer-nav-element'>
                                    <img src={inst} alt='inst'/>
                                    <span>@closedClub</span>
                                </NavItem>
                            </Nav>
                        </Col>
                    </Row>
                </Grid>
            </footer>
        )
    }
}