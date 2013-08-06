Timesheet.RegisterController = Ember.Controller.extend({
  register: function(){
    console.log('registering' + this.get('email') + ' ' + this.get('password'));
    Timesheet.User.createRecord({});
  }
});
