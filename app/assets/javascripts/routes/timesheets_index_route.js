App.TimesheetsIndexRoute = App.AuthenticatedRoute.extend({
  model: function(){
    return App.Timesheet.find();
  }
});
