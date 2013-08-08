Timesheet.SessionsNewController = Ember.ObjectController.extend({
  login: function(){
    this.setProperties({ loginFailed: false, isProcessing: true});
    this.get('model').save().then(function(data){
      this.set('isProcessing', false);
      this.get('currentUser').set('model', this.get('model'));
      this.transitionToRoute('index');
    }.bind(this), function(data){
      this.setProperties({ loginFailed: true, isProcessing: false});
    }.bind(this));
  },

  cancel: function(){
    this.get('model').deleteRecord();
    this.transitionToRoute('index');
  }
});
