Timesheet.SessionsNewRoute = Ember.Route.extend({
  model: function(){
    return Timesheet.Session.createRecord();
  }
});
