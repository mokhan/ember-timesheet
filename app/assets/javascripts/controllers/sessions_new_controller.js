Timesheet.SessionsNewController = Ember.Controller.extend({
  needs: ['currentUser'],

  login: function(){
    this.setProperties({ loginFailed: false, isProcessing: true});
    //$.post("/login", { email: this.get('email'), password: this.get('password') })
    this.get('model').save().then(function(data){
      this.set('isProcessing', false);
      //document.location = "#/timesheets";
      var userJSON = this.get('model').toJSON();
      userJSON.id = 'current';
      var object = this.store.load(Timesheet.User, userJSON);
      var user = Timesheet.User.find('current');

      this.get('controllers.currentUser').set('model', user);
      this.transitionToRoute('dashboard');
    }.bind(this), function(data){
      this.set('isProcessing', false);
      this.set('loginFailed', true);
    }.bind(this));
  },

  cancel: function(){
    this.get('model').deleteRecord();
    this.transitionToRoute('index');
  }
});
