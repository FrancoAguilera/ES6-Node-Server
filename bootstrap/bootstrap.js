module.exports = function (app) {

    var express = require('express');
    var path = require('path');
    var favicon = require('serve-favicon');
    var logger = require('morgan');
    var cookieParser = require('cookie-parser');
    var bodyParser = require('body-parser');

    // view engine setup
    app.set('views', path.join(__dirname, '../views'));
    app.set('view engine', 'html');
    app.set('view options', { layout:'../views/layout.ejs' });
    app.engine('html', require('ejs').renderFile);

    // uncomment after placing your favicon in /public
    //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, '../public')));

};