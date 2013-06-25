"use strict";

/**
 * GET home page
 * @param req
 * @param res
 */
exports.index = function (req, res) {
    res.render('index', { title: 'Express', page: 'index' });
};

/**
 * GET about page
 * @param req
 * @param res
 */
exports.about = function (req, res) {
    res.render('about', { title: 'Express', page: 'about' });
};

/**
 * GET contact page
 * @param req
 * @param res
 */
exports.contact = function (req, res) {
    res.render('contact', { title: 'Express', page: 'contact' });
};

