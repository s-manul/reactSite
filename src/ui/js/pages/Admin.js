import React from 'react';
import {Helmet} from "react-helmet";
import axios from 'axios';

import Col from 'react-bootstrap/lib/Col';
import Footer from '../components/Footer';
import Grid from 'react-bootstrap/lib/Grid';
import Header from '../components/Header';
import ModalCustom from '../components/ModalCustom';
import Row from 'react-bootstrap/lib/Row';

import '../../styles/contactUs.scss';

const instance = axios.create({timeout: 3000});

export default class Admin extends React.Component {

    state = {
        loginVal: '',
        passwordVal: '',
        modalShow: false,
        modalText: '',
        showForm: true
    };

    onModalHide = () => {
        this.setState({modalShow: false});
    };

    onChange = (type) => ({target}) => {
        this.setState({
            [`${type}Val`]: target.value
        });
    };

    onSubmit = (e) => {
        const {loginVal, passwordVal} = this.state;
        e.preventDefault();
        axios.post('/admin', {
            login: loginVal,
            password: passwordVal
        }).then(({data}) => {
            if (data.data) {
                this.setState({modalShow: true, modalText: data.message, showForm: false});
                document.getElementById('mainWrapper').innerHTML = data.data;
                document.getElementById('sendMatches').addEventListener('click', () => {
                    const matchesText = document.getElementById('addMatches').value;
                    let matches;
                    try {
                        matches = JSON.parse(matchesText);
                    } catch (e) {
                        this.setState({modalShow: true, modalText: 'Ошибка парсинга JSON'});
                        console.log(e);
                        return;
                    }
                    instance.post('/matches-db', matches).then(({data}) => {
                        this.setState({modalShow: true, modalText: data.message});
                    }).catch((error) => {
                        this.setState({modalShow: true, modalText: 'Ошибка сервера, подробности в консоле браузера'});
                        console.log(error);
                    });
                });
            } else {
                this.setState({modalShow: true, modalText: data.message});
            }
        }).catch((error) => {
            this.setState({modalShow: true, modalText: 'Ошибка сервера, подробности в консоле браузера'});
            console.log(error);
        });
    };

    render() {
        const {loginVal, passwordVal, modalShow, modalText, showForm} = this.state;
        return (
            <div>
                <Helmet
                    title="closedCLub admin"
                />
                <Header addMenu={false}/>
                <Grid id='mainWrapper' style={{marginTop: 50}}>
                {
                    showForm &&
                    <Row>
                        <Col sm={6}>
                            <form onSubmit={this.onSubmit}>
                                <input
                                    type="text"
                                    value={loginVal}
                                    onChange={this.onChange('login')}
                                    className="text-field text-field--input"
                                    placeholder="Логин"
                                />
                                <input
                                    type="text"
                                    value={passwordVal}
                                    onChange={this.onChange('password')}
                                    className="text-field text-field--input"
                                    placeholder="Пароль"
                                />
                                <div className="btn-wrapper text-center">
                                    <button
                                        className="btn-custom btn-custom--whole-rounded btn-custom--gold text-uppercase"
                                        type="submit"
                                    >
                                        Войти
                                    </button>
                                </div>
                            </form>
                        </Col>
                    </Row>
                }
                </Grid>
                <ModalCustom
                    show={modalShow}
                    text={modalText}
                    onHide={this.onModalHide}
                />
                <Footer addMenu={false}/>
            </div>
        );
    }
}