import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createPost: function(newTitle, newBody) {
      var self = this;
      var info = {title: newTitle, body: newBody};
      Ember.$.ajax("https://api.parse.com/1/classes/Post/", {
        type: "POST",
        data: JSON.stringify(info)
      }).done(function() {
        self.modelFor('posts').addObject(info);
        self.transitionTo('posts');
      });

    }
  }
});
