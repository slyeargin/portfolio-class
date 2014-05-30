'use strict';

exports.index = (req, res)=>{
  res.render('home/index', {title: 'My Portfolio'});
};

exports.about = (req, res)=>{
  res.render('home/about', {title: 'About Me'});
};

exports.contact = (req, res)=>{
  res.render('home/contact', {title: 'Contact Me'});
};

exports.resume = (req, res)=>{
  res.render('home/resume', {title: 'My Résumé'});
};
