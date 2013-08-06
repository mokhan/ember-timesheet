Timesheet.LoginController = Ember.Controller.extend({
  login: function(){
    this.setProperties({ loginFailed: false, isProcessing: true});
    console.log("LOGGING IN");
    console.log(this.get('email') + ' ' + this.get('password'));
    $.post("/login", { email: this.get('email'), password: this.get('password') })
    .then(function(data){
      console.log(data);
      console.log('login SUCCESS');
      this.set('isProcessing', false);
      document.location = "#/timesheets";
    }.bind(this), function(data){
      console.log('login FAIL');
      this.set('isProcessing', false);
      this.set('loginFailed', true);
    }.bind(this));
  }
});
