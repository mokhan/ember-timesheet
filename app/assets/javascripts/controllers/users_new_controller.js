Timesheet.UsersNewController = Ember.ObjectController.extend({
  register: function(){
    var self = this;
    var user = this.get('model');
    user.set('password_confirmation', user.get('password'));
    this.get('model').save().then(function(){
      self.transitionToRoute('index');
    }.bind(this), function(){
      console.log("oops..");
    }.bind(this));
  },
  cancel: function () {
    this.get('model').deleteRecord();
    self.transitionToRoute('index');
  }
});
