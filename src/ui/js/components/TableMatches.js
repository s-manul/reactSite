import React from 'react';

import Table from 'react-bootstrap/lib/Table';
import '../../styles/tableMatches.scss';

import fail from '../../images/fail.png';
import success from '../../images/success.png';


export default class TableMatches extends React.Component {

    convertDate = (dateStr) => {
        const sign = '-';
        let arr;
        if (~dateStr.indexOf(sign)) arr = dateStr.split('-');
        if (arr) {
            return arr[2] + '.' + arr[1] + '.' + arr[0];
        }
        return '';
    };

    render() {
        let {matches, rows, selectValues} = this.props;
        if (!matches || matches.length === 0) return null;
        if (selectValues && !selectValues.some(({value}) => value === 'all')) {
            matches = matches.filter(({date}) => {
                return selectValues.some(({value}) => value === date.slice(0, 7));
            });
        }
        if (rows) {
            matches = matches.slice(-rows)
        }
        return (
            <Table responsive striped>
                <thead>
                    <tr>
                        <th>Дата</th>
                        <th>Матч</th>
                        <th>Ставка</th>
                        <th>Коэффициент</th>
                        <th>Счет</th>
                        <th>Результат</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        matches.map((item, index) => {
                            return (
                                <tr className={index === 0 ? 'no-border-top': ''} key={index}>
                                    <td>{this.convertDate(item.date)}</td>
                                    <td>{item.match}</td>
                                    <td>{item.bet}</td>
                                    <td>{item.ratio}</td>
                                    <td>{item.score}</td>
                                    <td>
                                        <img src={item.result ? success : fail} alt='Выигрыш/Проигрыш'/>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </Table>
        );
    }
}

