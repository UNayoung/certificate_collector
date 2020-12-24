var express = require('express');
var router = express.Router();
const Certificate = require('../models/certificate');
const Plan = require('../models/plan');
var cors = require('cors');
var request = require('request');

var service_key = '*******';
var url = 'http://openapi.q-net.or.kr/api/service/rest/InquiryListNationalQualifcationSVC/getList';
var queryParams = '?' + encodeURIComponent('ServiceKey') + '=' +service_key;
queryParams += '&' + '_' + encodeURIComponent('type') + '=' + encodeURIComponent('json');
var data = [];

/* GET home page. */
router.get('/list', cors(), function(req, res, next) {
    Certificate.find({})
        .then((info)=>{
            res.json(info);
        })
});
router.get('/plan', cors(), function(req, res, next) {
    Plan.find({})
        .then((info)=>{
            res.json(info);
        })
});
router.get('/post', cors(), function(req, res, next) {
    res.json(data);
});
router.get('/home', cors(), function(req, res, next) {
    data = [];
    request({
        url: url + queryParams,
        method: 'GET'
    }, function (error, response, body) {
        console.log('Status', response.statusCode);
        // console.log('Header', JSON.stringify(response.header));
        // console.log('Response Received', body);
        let json = JSON.parse(body);
        let i = 0;
        while(json.response.body.items.item[i]) {
            var temp = {
                name: json.response.body.items.item[i].jmfldnm,
                category: json.response.body.items.item[i].mdobligfldnm
            }
            console.log(temp.name);
            data.push(temp);
            i++;
        }
        var response = {
            success: true
        }
        res.status(200).json(response);
    })
});
/* POST home page. */
router.post('/create', function(req, res, next) {
    const certificate = new Certificate({
        title : req.body.title,
        source : req.body.source,
        year : req.body.year,
        field: req.body.field,
    });
    certificate.save((err) => {
        var response = {
            success: true
        }
        res.status(200).json(response);
    })
});

router.post('/plancreate', function(req, res, next) {
    let time = null;
    time = new Date();
    time.setHours(time.getHours()+9);
    const plan = new Plan({
        title: req.body.title,
        date: req.body.date,
        tips: req.body.tips,
        field: req.body.field,
        create: time,
    });
    plan.save((err) => {
        var response = {
            success: true
        }
        res.status(200).json(response);
    })
});

router.post('/plancreatetwo', function(req, res, next) {
    let time = null;
    time = new Date();
    time.setHours(time.getHours()+9);
    const planTwo = new Plan({
        title: req.body.title,
        date: '입력요망',
        tips: '입력요망',
        field: req.body.field,
        create: time,
    });
    planTwo.save((err) => {
        var response = {
            success: true
        }
        res.status(200).json(response);
    })
});

router.post('/delete', function(req, res, next) {
    Certificate.deleteOne({_id: req.body._id}).then((result)=>{
        var response = {
            success: true
        }
        res.status(200).json(response);
    }).catch((err)=>{
        var response = {
            success : false
        }
        res.status(500).json(response);
    })
});

router.post('/plandelete', function(req, res, next) {
    Plan.deleteOne({_id: req.body._id}).then((result)=>{
        var response = {
            success: true
        }
        res.status(200).json(response);
    }).catch((err)=>{
        var response = {
            success : false
        }
        res.status(500).json(response);
    })
});

router.post('/modify', function(req, res, next) {
    Certificate.findByIdAndUpdate(req.body._id, req.body, (err, info)=>{
        var response = {
            success: true
        }
        res.status(200).json(response);
    })
});

router.post('/planmodify', function(req, res, next) {
    Plan.findByIdAndUpdate(req.body._id, req.body, (err, info)=>{
        var response = {
            success: true
        }
        res.status(200).json(response);
    })
});

module.exports = router;
