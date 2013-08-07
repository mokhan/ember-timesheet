Timesheet.SessionsNewController = Ember.ObjectController.extend({
  login: function(){
    this.setProperties({ loginFailed: false, isProcessing: true});
    this.get('model').save().then(function(data){
      console.log('SUCCESS');
      this.set('isProcessing', false);
      var userJSON = this.get('model').toJSON();
      userJSON.id = 'current';
      var object = this.store.load(Timesheet.User, userJSON);
      var user = Timesheet.User.find('current');

      console.log('setting current user');
      this.get('currentUser').set('model', user);
      this.transitionToRoute('index');
    }.bind(this), function(data){
      console.log('FAIL');
      this.set('isProcessing', false);
      this.set('loginFailed', true);
    }.bind(this));
  },

  cancel: function(){
    this.get('model').deleteRecord();
    this.transitionToRoute('index');
  }
});
