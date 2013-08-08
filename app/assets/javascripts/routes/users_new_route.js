App.UsersNewRoute = Ember.Route.extend({
  model: function() {
    return App.User.createRecord();
  }
});
