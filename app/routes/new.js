import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createRecipe: function(newName, newDescription) {
      // var self = this;
      var info = {name: newName, description: newDescription};
      Ember.$.ajax("https://api.parse.com/1/classes/", {
        type: "POST",
        data: JSON.stringify(info)
      }).done(function() {
        console.log(name);
      });

    }
  }
});
