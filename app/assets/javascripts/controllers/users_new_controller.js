App.UsersNewController = Ember.ObjectController.extend({
  needs: ['currentUser'],

  register: function(){
    var user = this.get('model');
    user.set('password_confirmation', user.get('password'));
    this.get('model').save().then(function(){
      this.get('controllers.currentUser').set('model', this.get('model'));
      this.transitionToRoute('timesheets');
    }.bind(this));
  },
  cancel: function () {
    this.get('model').deleteRecord();
    this.transitionToRoute('index');
  }
});
