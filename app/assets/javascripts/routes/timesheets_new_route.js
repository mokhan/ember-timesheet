App.TimesheetsNewRoute = App.AuthenticatedRoute.extend({
  model: function() {
    return App.Timesheet.createRecord();
  }
});
