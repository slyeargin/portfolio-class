'use strict';

var multiparty = require('multiparty');
var traceur = require('traceur');
var moment = require('moment');
var Project = traceur.require(__dirname + '/../models/project.js');

exports.index = (req, res)=>{
  Project.findAll(projects=>{
    res.render('projects/index', {projects:projects, title: 'Portfolio: List'});
  });
};

exports.new = (req, res)=>{
  res.render('projects/new', {title: 'Portfolio: New'});
};

exports.create = (req, res)=>{
  var form = new multiparty.Form();

  form.parse(req, (err, fields, files)=>{
    Project.create(res.locals.user._id, fields, files, ()=>{
      res.redirect('/projects');
    });
  });
};

exports.show = (req, res)=>{
  Project.findById(req.params.id, project=>{
    res.render('projects/show', {project:project, title: 'Portfolio: Show'});
  });
};

exports.remove = (req, res)=>{
  Project.removeById(req.params.id, ()=>{
    res.redirect('/projects');
  });
};

exports.edit = (req, res)=>{
  Project.findById(req.params.id, project=>{
    project.date = moment(project.date).format('YYYY-MM-DD');
    res.render('projects/edit', {project:project, title: 'Portfolio: Edit'});
  });
};

exports.saveChanges = (req, res)=>{
  Project.findById(req.params.id, p=>{
    Project.update(req.body, p, project=>{
      project.save(()=>{
        res.render('projects/show', {project:project, title: 'Portfolio: Show'});
      });
    });
  });
};
