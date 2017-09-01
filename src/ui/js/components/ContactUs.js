import React from 'react';

import axios from 'axios';
import ballPhone from '../../images/ball-phone.jpg';
import Grid from 'react-bootstrap/lib/Grid';
import ModalCustom from './ModalCustom';
import Scroll from 'react-scroll';
import '../../styles/contactUs.scss';

const instance = axios.create({timeout: 3000});

export default class ContactUs extends React.Component {

    state = {
        nameVal: '',
        emailVal: '',
        textVal: '',
        modalShow: false,
        modalText: ''
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
        const {nameVal, emailVal, textVal} = this.state;
        e.preventDefault();
        if (!nameVal) {
            this.setState({modalShow: true, modalText: 'Введите имя'});
            return false;
        }
        if (!emailVal) {
            this.setState({modalShow: true, modalText: 'Введите email'});
            return false;
        }
        instance.post('/clients-db', {
            name: nameVal,
            eMail: emailVal,
            message: textVal,
            date: new Date()
        }).then((res) => {
            this.setState({modalShow: true, modalText: res.data.message});
        }).catch((error) => {
            this.setState({modalShow: true, modalText: 'Ошибка сервера, подробности в консоле браузера'});
            console.log(error);
        });
    };

    render() {
        const {nameVal, emailVal, textVal, modalShow, modalText} = this.state;
        return (
            <Scroll.Element name='contactUs'>
                <div className="content-block contacts">
                    <Grid>
                        <h2 className='text-center text-uppercase title'>Свяжитесь с нами</h2>
                        <div className="contacts__left">
                            <form onSubmit={this.onSubmit}>
                                <h3 className="text-center no-margin-top">Оставьте сообщение</h3>
                                <p className="text-center">Мы ответим вам в ближайшее время</p>
                                <div className="input-wrapper">
                                    <input
                                        type="text"
                                        className="text-field text-field--input"
                                        placeholder="Ваше имя"
                                        value={nameVal}
                                        onChange={this.onChange('name')}
                                    />
                                </div>
                                <div className="input-wrapper">
                                    <input
                                        type="text"
                                        className="text-field text-field--input"
                                        placeholder='Ваш e-mail'
                                        value={emailVal}
                                        onChange={this.onChange('email')}
                                    />
                                </div>
                                <textarea
                                    className="text-field text-field--textarea"
                                    rows={5}
                                    placeholder='Введите сообщение'
                                    value={textVal}
                                    onChange={this.onChange('text')}
                                />
                                <div className="btn-wrapper text-center">
                                    <button className="btn-custom btn-custom--whole-rounded btn-custom--gold center-block text-uppercase" type="submit">Отправить</button>
                                </div>
                            </form>
                        </div>
                        <div className="contacts__right">
                            <img src={ballPhone} alt="Мяч с телефоном" className="img-responsive center-block"/>
                        </div>
                    </Grid>
                </div>
                <ModalCustom
                    show={modalShow}
                    text={modalText}
                    onHide={this.onModalHide}
                />
            </Scroll.Element>
        );
    }
}

