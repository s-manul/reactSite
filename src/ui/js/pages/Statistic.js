import React from 'react';
import {Helmet} from "react-helmet";
import axios from 'axios';

import Col from 'react-bootstrap/lib/Col';
import Grid from 'react-bootstrap/lib/Grid';
import Footer from '../components/Footer';
import Header from '../components/Header';
import {Link} from 'react-router-dom';
import Row from 'react-bootstrap/lib/Row';
import Select from 'react-select-plus';
import TableMatches from '../components/TableMatches';

import 'react-select-plus/dist/react-select-plus.css';

const months = {
    '01': 'Январь',
    '02': 'Февраль',
    '03': 'Март',
    '04': 'Апрель',
    '05': 'Май',
    '06': 'Июнь',
    '07': 'Июль',
    '08': 'Август',
    '09': 'Сентябрь',
    '10': 'Октябрь',
    '11': 'Ноябрь',
    '12': 'Декабрь',
};

export default class Statistic extends React.Component {

    state = {
        matches: [],
        options: [{value: 'all', label: 'Весь период'}],
        value: [{value: 'all', label: 'Весь период'}]
    };

    convertDateToPeriod = (str, months) => {
        for (let key in months) {
            if (!months.hasOwnProperty(key)) continue;
            const slice = str.slice(5, 7);
            if (key === slice) return months[key];
        }
    };

    onChange = (newValue) => {
        this.setState({value: newValue})
    };

    componentWillMount() {
        axios.get('/table').then(({data}) => {
            const matches = data.data;
            const options = [];
            const valueArr = [];
            matches.forEach(({date}) => {
                const value = date.slice(0, 7);    //from '2014-07-28' to '2014-07'
                if (!valueArr.includes(value)) {
                    valueArr.push(value);
                    const label = this.convertDateToPeriod(date, months) + ' ' + date.slice(0, 4);  //from '2014-07-28' to 'Июль 2014'
                    options.push({value, label})
                }
            });
            this.setState({matches});
            this.setState({options: [...this.state.options, ...options]});
        }).catch((err) => {
            console.log(err);
        });
    }

    render() {
        const {matches, options, value} = this.state;
        return (
            <div className="full-statistic">
                <Helmet
                    title="closedCLub полная статистика"
                />
                <Header addMenu={false}/>
                <Grid>
                    <h1 className="text-center text-uppercase title">Полная статистика</h1>
                    <Row style={{marginBottom: 30}}>
                        <Col sm={6} smOffset={3}>
                            <Select
                                value={value}
                                options={options}
                                openOnFocus={true}
                                onChange={this.onChange}
                                multi={true}
                                joinValues={true}
                                placeholder='Выберите период'
                                noResultsText='Совпадений не найдено'
                            />
                        </Col>
                    </Row>
                    <TableMatches
                        matches={matches}
                        selectValues={value}
                    />
                    <div className="btn-wrapper text-center">
                        <Link
                            to="/"
                            className="btn-custom btn-custom--whole-rounded btn-custom--gold text-uppercase"
                        >
                            На главную страницу
                        </Link>
                    </div>
                </Grid>
                <Footer addMenu={false}/>
            </div>
        );
    }
}