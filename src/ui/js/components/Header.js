import React from 'react';
import {Link} from 'react-router-dom';
import Grid from 'react-bootstrap/lib/Grid';
import Navbar from 'react-bootstrap/lib/Navbar';
import {scroller} from 'react-scroll';
import '../../styles/header.scss';

const navMenu = [
    {text: 'Главная', scrollTo: 'mainImage'},
    {text: 'О нас', scrollTo: 'aboutUs'},
    {text: 'Статистика', scrollTo: 'statistic'},
    {text: 'Подписка', scrollTo: 'proposals'},
    {text: 'Помощь', scrollTo: 'contactUs'},
];

export default class Header extends React.Component {

    state = {
        expanded: false
    };

    navbarCollapseRender = () => {
        const {addMenu} = this.props;
        if (addMenu) {
            return (
                <Navbar.Collapse>
                    <ul className="nav navbar-nav navbar-right">
                        {
                            navMenu.map((item, index) => {
                                return(
                                    <li key={index}>
                                        <a
                                            className='nav-element text-uppercase'
                                            data-scrollTo={item.scrollTo}
                                            href="/"
                                            onClick={this.onClick}
                                        >
                                            {item.text}
                                            </a>
                                    </li>
                                );
                            })
                        }
                        <li><Link className='nav-element text-uppercase' to="/faq">F.A.Q.</Link></li>
                    </ul>
                </Navbar.Collapse>
            );
        }
        return null;
    };

    onClick = (e) => {
        e.preventDefault();
        scroller.scrollTo(e.target.getAttribute('data-scrollTo'),{
            duration: 500,
            smooth: true,
            offset: -50
        });
        this.setState({expanded: false});
    };

    onToggle = () => {
        const {expanded} = this.state;
        this.setState({expanded: !expanded})
    };

    componentDidMount() {
        document.addEventListener('click', (e) => {
            if (!e.target.closest('nav.navbar')) {
                const {expanded} = this.state;
                if (expanded) {
                    e.preventDefault();
                    this.setState({expanded: false})
                }
            }
        });
    }

    render() {
        const {addMenu} = this.props;
        return(
            <header>
                <Navbar
                    inverse
                    fixedTop
                    expanded={this.state.expanded}
                    onToggle={this.onToggle}
                >
                    <Grid>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <Link className='nav-element' to="/">closedClub</Link>
                            </Navbar.Brand>
                            {addMenu && <Navbar.Toggle/>}
                        </Navbar.Header>
                        {this.navbarCollapseRender()}
                    </Grid>
                </Navbar>
            </header>
        )
    }
}