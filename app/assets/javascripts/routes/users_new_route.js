Timesheet.UsersNewRoute = Ember.Route.extend({
  model: function() {
    return Timesheet.User.createRecord();
  }
});
