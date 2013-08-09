App.SessionsNewController = Ember.ObjectController.extend({
  attemptedTransition: null,
  login: function(){
    this.setProperties({ loginFailed: false, isProcessing: true});
    this.get('model').save().then(function(data){
      this.set('isProcessing', false);
      this.get('currentUser').set('model', this.get('model'));
      this.redirectToNextPage();
    }.bind(this), function(data){
      this.setProperties({ loginFailed: true, isProcessing: false});
    }.bind(this));
  },

  cancel: function(){
    this.get('model').deleteRecord();
    this.transitionToRoute('index');
  },

  redirectToNextPage: function(){
    if (this.get('attemptedTransition')) {
      this.get('attemptedTransition').retry();
      this.set('attemptedTransition', null);
    } else {
      this.transitionToRoute('index');
    }
  }
});
