App.AuthenticatedRoute = Ember.Route.extend({
  beforeModel: function(transition){
    if(!this.controllerFor('currentUser').get('isSignedIn')) {
      console.log("NOT SIGNED IN");
      this.redirectToLogin(transition);
    }
  },

  redirectToLogin: function(transition) {
    var controller = this.controllerFor('sessions_new');
    controller.set('attemptedTransition', transition);
    this.transitionTo('sessions.new');
  },

  events: {
    error: function(error, transition) {
      if (error.status === 401) {
        this.redirectToLogin(transition);
      }
    }
  }
});
