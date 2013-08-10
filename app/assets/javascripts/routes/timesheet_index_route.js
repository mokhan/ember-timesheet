App.TimesheetIndexRoute = App.AuthenticatedRoute.extend({
  enter: function(){
    this.transitionTo('entries.index');
  }
});
