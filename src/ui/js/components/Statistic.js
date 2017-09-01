import React from 'react';

import axios from 'axios';
import Grid from 'react-bootstrap/lib/Grid';
import Scroll from 'react-scroll';

import TableMatches from './TableMatches';

export default class Statistic extends React.Component {

    state = {
        matches: []
    };

    componentWillMount() {
        axios.get('/table').then((res) => {
            this.setState({matches: res.data.data})
        }).catch((err) => {
            console.log(err);
        });
    }

    render() {
        const {matches} = this.state;
        return (
            <Scroll.Element name='statistic'>
                <div className='content-block statistic'>
                    <Grid>
                        <h2 className='text-center text-uppercase title'>Наша статистика</h2>
                        <TableMatches
                            matches={matches}
                            rows={10}
                        />
                        <div className='btn-wrapper text-center'>
                            <a className='btn-custom btn-custom--whole-rounded btn-custom--gold text-uppercase' href='/statistic'>Полная статистика</a>
                        </div>
                    </Grid>
                </div>
            </Scroll.Element>
        );
    }
}

