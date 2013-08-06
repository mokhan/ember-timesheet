Timesheet.LoginController = Ember.Controller.extend({
  login: function(){
    console.log("LOGGING IN");
    console.log(this.get('email') + ' ' + this.get('password'));
  }
});
