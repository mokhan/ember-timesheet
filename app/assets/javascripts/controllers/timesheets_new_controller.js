App.TimesheetsNewController = Ember.ObjectController.extend({
  save: function() {
    console.log("save");
    this.content.save();
    this.transitionToRoute('timesheets');
  },
  cancel: function() {
    this.content.deleteRecord();
    this.transitionToRoute('timesheets');
  }
});
