App.TimesheetRoute = App.AuthenticatedRoute.extend({
  model: function(params){
    return Timesheet.find(params.timesheet_id);
  }
});
