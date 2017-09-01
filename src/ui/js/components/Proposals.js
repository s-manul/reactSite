import React from 'react';

import Col from 'react-bootstrap/lib/Col';
import Grid from 'react-bootstrap/lib/Grid';
import ReactTooltip from 'react-tooltip'
import Row from 'react-bootstrap/lib/Row';
import Scroll from 'react-scroll';
import '../../styles/proposals.scss';

const proposals = [
    {
        title: '1 VIP прогноз',
        text: '150 рублей',
        form: {hiddenVal: '-----BEGIN PKCS7-----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-----END PKCS7-----'}
    },
    {
        title: '3 VIP прогноза',
        text: '350 рублей',
        smallText: 'скидка 25%',
        form: {hiddenVal: '-----BEGIN PKCS7-----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-----END PKCS7-----'}
    },
    {
        title: '5 VIP прогнозов',
        text: '500 рублей',
        smallText: 'скидка 35%',
        form: {hiddenVal: '-----BEGIN PKCS7-----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-----END PKCS7-----'}
    },
    {
        title: '10 VIP прогнозов',
        text: '800 рублей',
        smallText: 'скидка 45%',
        form: {hiddenVal: '-----BEGIN PKCS7-----MIIHdwYJKoZIhvcNAQcEoIIHaDCCB2QCAQExggEwMIIBLAIBADCBlDCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb20CAQAwDQYJKoZIhvcNAQEBBQAEgYA4WYykNcVJfXWQRPb5qIYz/oqrhxxLJ2ZB0+vDMKoMF7bPTDcwqhGkVhhUxwXjxKLibUqgorjemdXfNVF47w1SUkNUUfhP4mdpqaVwpKNhgXkte3tIjGzs6bqDxisHgbMAfPdZHzb70iWE/JAWEFrZuzvKF14ALu0cenrXww0SpjELMAkGBSsOAwIaBQAwgfQGCSqGSIb3DQEHATAUBggqhkiG9w0DBwQI4E0bM5qZplmAgdDbHTGqLoW5y3XvFy7nzkNJHhkSuZRVKzmPpDpEdx0m12iU4ZE0mv0R6bUaXqFBXoyl+EQPYG+NPM0Q2K7dxRJaakwlOnZgopNimXdCQvANsvVVBNQFiByQr6EYpNk2LKH9s6EJlnGRbvb8balt0xsXwX6rwL3d6cfnmuUb73ZrjqeUSRc4uF+wPDHLxaon6kGOifmflPb/egTSZUjYY7+EAVD7cffLIzRFTsDEDRBiCSElMFCuHwHRpeOaADCnCqO/fFvWkAn9JPoeS9qg/GMUoIIDhzCCA4MwggLsoAMCAQICAQAwDQYJKoZIhvcNAQEFBQAwgY4xCzAJBgNVBAYTAlVTMQswCQYDVQQIEwJDQTEWMBQGA1UEBxMNTW91bnRhaW4gVmlldzEUMBIGA1UEChMLUGF5UGFsIEluYy4xEzARBgNVBAsUCmxpdmVfY2VydHMxETAPBgNVBAMUCGxpdmVfYXBpMRwwGgYJKoZIhvcNAQkBFg1yZUBwYXlwYWwuY29tMB4XDTA0MDIxMzEwMTMxNVoXDTM1MDIxMzEwMTMxNVowgY4xCzAJBgNVBAYTAlVTMQswCQYDVQQIEwJDQTEWMBQGA1UEBxMNTW91bnRhaW4gVmlldzEUMBIGA1UEChMLUGF5UGFsIEluYy4xEzARBgNVBAsUCmxpdmVfY2VydHMxETAPBgNVBAMUCGxpdmVfYXBpMRwwGgYJKoZIhvcNAQkBFg1yZUBwYXlwYWwuY29tMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDBR07d/ETMS1ycjtkpkvjXZe9k+6CieLuLsPumsJ7QC1odNz3sJiCbs2wC0nLE0uLGaEtXynIgRqIddYCHx88pb5HTXv4SZeuv0Rqq4+axW9PLAAATU8w04qqjaSXgbGLP3NmohqM6bV9kZZwZLR/klDaQGo1u9uDb9lr4Yn+rBQIDAQABo4HuMIHrMB0GA1UdDgQWBBSWn3y7xm8XvVk/UtcKG+wQ1mSUazCBuwYDVR0jBIGzMIGwgBSWn3y7xm8XvVk/UtcKG+wQ1mSUa6GBlKSBkTCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb22CAQAwDAYDVR0TBAUwAwEB/zANBgkqhkiG9w0BAQUFAAOBgQCBXzpWmoBa5e9fo6ujionW1hUhPkOBakTr3YCDjbYfvJEiv/2P+IobhOGJr85+XHhN0v4gUkEDI8r2/rNk1m0GA8HKddvTjyGw/XqXa+LSTlDYkqI8OwR8GEYj4efEtcRpRYBxV8KxAW93YDWzFGvruKnnLbDAF6VR5w/cCMn5hzGCAZowggGWAgEBMIGUMIGOMQswCQYDVQQGEwJVUzELMAkGA1UECBMCQ0ExFjAUBgNVBAcTDU1vdW50YWluIFZpZXcxFDASBgNVBAoTC1BheVBhbCBJbmMuMRMwEQYDVQQLFApsaXZlX2NlcnRzMREwDwYDVQQDFAhsaXZlX2FwaTEcMBoGCSqGSIb3DQEJARYNcmVAcGF5cGFsLmNvbQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMTcwODIwMTczNTA3WjAjBgkqhkiG9w0BCQQxFgQUKmOsVlywiBitHRXDcJumDYETlKYwDQYJKoZIhvcNAQEBBQAEgYAySsV/m5vuWeaRf7Et378OIPxHAYWsK3mKXgzl4VLxaWXZsHlqlusk7AhGzu4rjrPaTYuvJF2G03/Cqv9uonH3oEOzxdA8oQ+9xx0sKSTJz1KZUxioECNO3gu9SUenkMrrY++gYfC8saFuW4d0CXmMZXRXL7P81f+tk3SLa+1dEw==-----END PKCS7-----'}
    }
];

export default class Proposals extends React.Component {

    proposalBlocksRender = () => {
        return (
            <Row>
                {
                    proposals.map((item, index) => {
                        return (
                            <Col key={index} sm={6} lg={3}>
                                <div className='proposals__border center-block'>
                                    <h3 className='text-center proposals__title'>{item.title}</h3>
                                    <p className='text-center text-bold'>{item.text}</p>
                                    {
                                        item.smallText &&
                                        <p className='text-center small'>{item.smallText}</p>
                                    }
                                    <form
                                        action='https://www.paypal.com/cgi-bin/webscr'
                                        method='post'
                                        target='_blank'>
                                        <input type='hidden' name='cmd' value='_s-xclick'/>
                                        <input type='hidden' name='encrypted' value={item.form.hiddenVal}/>
                                        <button
                                            className='btn-custom btn-custom--partly-rounded btn-custom--gold text-uppercase center-block'
                                            type='submit'
                                            data-tip
                                            data-for={'button' + index}
                                        >
                                            Купить сейчас
                                        </button>
                                        <ReactTooltip id={'button' + index} type='dark' effect='solid' place='bottom' delayShow={500}>
                                            <div style={{maxWidth: 200, textAlign: 'center', padding: 0, margin: 0}}>При нажатии откроется страница оплаты Paypal</div>
                                        </ReactTooltip>
                                    </form>
                                </div>
                            </Col>
                        );
                    })
                }
            </Row>
        );
    };

    render() {
        return (
            <Scroll.Element name='proposals'>
                <div className='background content-block proposals'>
                    <Grid>
                        <h2 className='text-center text-uppercase title'>Наши предложения</h2>
                        {this.proposalBlocksRender()}
                    </Grid>
                </div>
            </Scroll.Element>
        );
    }
}

