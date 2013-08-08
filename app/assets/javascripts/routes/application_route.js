App.ApplicationRoute = Ember.Route.extend({
  setupController: function(controller){
    controller.set('title', 'Welcome to Timesheets');
  }
});
