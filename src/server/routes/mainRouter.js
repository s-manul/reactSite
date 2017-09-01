const express = require('express');
const fs = require('fs');
const path = require('path');
const clientModel = require('../db/clientModel');
const matchModel = require('../db/matchModel');
const userModel = require('../db/userModel');
const mainRouter = express.Router();

mainRouter.get('/table', (req, res, next) => {
    matchModel.find({}).then((data) => {
        data.sort((a, b) => (new Date(a.date)).valueOf() > (new Date(b.date)).valueOf() ? 1 : -1);
        res.send({err: null, data: data});
    });
});

mainRouter.post('/clients-db', (req, res, next) => {
    let body;
    try {
        body = JSON.parse(req.body);
    } catch(e) {
        body = req.body;
    }
    clientModel.create(body).then((data) => {
        res.send({
            message: 'Данные успешно отправлены'
        });
    }).catch(next);
});

mainRouter.post('/matches-db', (req, res, next) => {
    let body;
    try {
        body = JSON.parse(req.body);
    } catch(e) {
        body = req.body;
    }
    const promiseCreateArr = [];
    const promiseFindArr = [];
    body.forEach((item) => {
        promiseFindArr.push(matchModel.findOne(item));
    });
    Promise.all(promiseFindArr).then((data) => {
        let record;
        let exist = data.some((item) => {
            if (item) {
                record = item;
                return true;
            }
        });
        if (!exist) {
            body.forEach((item) => {
                promiseCreateArr.push(matchModel.create(item));
            });
            Promise.all(promiseCreateArr).then((data) => {
                res.send({
                    data: data,
                    message: 'Данные успешно отправлены'
                });
            }).catch(next);
        } else {
            res.send({
                data: record,
                message: 'Записи не добавлены. Запись "' + record.date + ', ' + record.match + '" уже существует'
            });
        }
    });
});

mainRouter.post('/admin', (req, res, next) => {
    let body;
    try {
        body = JSON.parse(req.body);
    } catch(e) {
        body = req.body;
    }
    if (Object.keys(body).length > 0) {
        userModel.findOne(body).then((data) => {
            if (data) {
                fs.readFile(path.join(__dirname, '../matchesWrapper.html'), 'utf8', (err, data) => {
                    if (err) {
                        next(err, req, res, next);
                    } else {
                        res.send({
                            data: data,
                            message: 'ОК'
                        })
                    }
                });
            } else {
                res.send({
                    message: 'Неверная комбинация логина и пароля'
                })
            }
        });
    } else {
        res.send({
            message: 'Пустой объект запроса'
        })
    }
});

module.exports = mainRouter;