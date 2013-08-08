App.SessionsDestroyRoute = Ember.Route.extend({
  enter: function(){
    var controller = this.controllerFor('currentUser');
    controller.set('model', undefined);
    App.Session.find('current').then(function(session) { 
      session.deleteRecord();
      controller.store.commit();
    });
    this.transitionTo('index');
  }
});
