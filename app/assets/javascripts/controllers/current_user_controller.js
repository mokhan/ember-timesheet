Timesheet.CurrentUserController = Ember.ObjectController.extend({
  isSignedIn: function() {
    var user = this.get('model');
    return user && user.get('isLoaded');
  }.property('model.isLoaded'),

  user: function() {
    return this.get('model');
  }.property('model.isLoaded')
});
