App.SessionsNewRoute = Ember.Route.extend({
  model: function(){
    return App.Session.createRecord();
  }
});
