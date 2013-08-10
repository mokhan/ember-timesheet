App.TimesheetsNewController = Ember.ObjectController.extend({
  save: function() {
    console.log("save");
    this.content.save().then(function(){
      this.transitionToRoute('timesheet', this.content);
    }.bind(this));
  },
  cancel: function() {
    this.content.deleteRecord();
    this.transitionToRoute('timesheets');
  }
});
