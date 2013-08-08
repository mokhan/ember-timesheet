App.TimesheetsRoute = Ember.Route.extend({
  model: function(){
    return App.Timesheet.find();
  }
});
