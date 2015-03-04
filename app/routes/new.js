import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createPost: function(newTitle, newName, newAuthor, newRecipeType, newPrepTime, newCookTime, newCookTemp, newCookTempUnits, newYieldNumber, newYieldUnits) {
      var self = this;
      var info = {title: newTitle, name: newName, author: newAuthor, recipeType: newRecipeType, prepTime: newPrepTime, cookTime: newCookTime, cookTempUnits: newCookTempUnits, yieldNumber: newYieldNumber, yieldName: newYieldUnits};
      Ember.$.ajax("https://api.parse.com/1/classes/Post/", {
        type: "POST",
        data: JSON.stringify(info)
      }).done(function() {
        console.log(name);
      });

    }
  }
});
