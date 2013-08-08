// For more information see: http://emberjs.com/guides/routing/

App.Router.map(function() {
  this.resource('users', function() {
    this.route('new');
  });
  this.resource('sessions', function() { 
    this.route('new');
    this.route('destroy');
  });
  this.resource('timesheets', function() {
  });
});

