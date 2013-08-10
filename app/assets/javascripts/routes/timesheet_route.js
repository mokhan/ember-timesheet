App.TimesheetRoute = App.AuthenticatedRoute.extend({
  model: function(params){
    return App.Timesheet.find(params.timesheet_id);
  }
});
