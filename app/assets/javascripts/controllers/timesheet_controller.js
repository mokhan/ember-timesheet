App.TimesheetController = Ember.ObjectController.extend({
  title: function() {
    document.title = 'Timesheet - ' + this.get('name');
  }.observes('model.name')
});
