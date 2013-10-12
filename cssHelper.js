if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to cssHelper.";
  };

  Template.hello.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
