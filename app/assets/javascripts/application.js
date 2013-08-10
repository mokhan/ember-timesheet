// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require handlebars
//= require ember
//= require ember-data
//= require_self
//= require timesheet

// for more details see: http://emberjs.com/guides/application/
App = Ember.Application.create({
  LOG_TRANSITIONS: true,
  //LOG_TRANSITIONS_INTERNAL: true,
  LOG_VIEW_LOOKUPS: true,
  LOG_ACTIVE_GENERATION: true,
});
Ember.LOG_BINDING = true;
Ember.ENV.RAISE_ON_DEPRECATION = true;
Ember.LOG_STACKTRACE_ON_DEPRECATION = true;

Ember.Route.reopen({
  activate: function() {
    this._super();
    document.title = this.routeName;
  }
});

//= require_tree .
Ember.Application.initializer({
  name: 'currentUser',

  initialize: function(container) {
    var store = container.lookup('store:main');
    App.deferReadiness();
    var user = App.Session.find('current')
    user.then(function(model){
      console.log("SIGNED IN " + model.get('email'));
      App.advanceReadiness();
    }, function(){
      App.advanceReadiness();
    });
    container.lookup('controller:currentUser').set('model', user);
    container.typeInjection('controller', 'currentUser', 'controller:currentUser');
  }
});
