'use strict';

var traceur = require('traceur');
var dbg = traceur.require(__dirname + '/route-debugger.js');
var initialized = false;

module.exports = (req, res, next)=>{
  if(!initialized){
    initialized = true;
    load(req.app, next);
  }else{
    next();
  }
};

function load(app, fn){
  var home = traceur.require(__dirname + '/../routes/home.js');
  var users = traceur.require(__dirname + '/../routes/users.js');
  var projects = traceur.require(__dirname + '/../routes/projects.js');

  app.all('*', dbg, users.lookup);
  app.get('/', dbg, home.index);
  app.get('/about', dbg, home.about);
  app.get('/contact', dbg, home.contact);
  app.get('/resume', dbg, home.resume);

  app.get('/login', dbg, users.login);
  app.post('/login', dbg, users.authenticate);
  app.get('/logout', dbg, users.logout);

  app.get('/projects', dbg, projects.index);
  app.post('/projects', dbg, projects.create);
  app.get('/projects/new', dbg, projects.new);
  app.get('/projects/:id', dbg, projects.show);
  app.delete('/projects/remove/:id', dbg, projects.remove);
  app.get('/projects/edit/:id', dbg, projects.edit);
  app.put('/projects/edit/:id', dbg, projects.saveChanges);

  console.log('Routes Loaded');
  fn();
}


// $2a$10$dyN31PfziG8khbRG5VqWo.Gt4aqqeREfjZXGIEh1iXciiNX1B7fk.
