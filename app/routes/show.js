import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return Ember.$.ajax("https://api.parse.com/1/classes/Post").then(function(response) {
      return response.results;

    });
  }
});


// App.PhotoRoute = Ember.Route.extend({
//   model: function(params) {
//     return Ember.$.getJSON('/photos/'+params.photo_id);
//   }
// });
