import ajax from 'ic-ajax';
import Ember from 'ember';

export default Ember.Object.extend({
  find: function(name, id){
    /* jshint unused: false */
    return ajax("https://api.parse.com/1/classes/Post/" + id).then(function(post){
      post.id = post.objectId;
      delete post.objectId;
      return post;
    });
  },

  findAll: function(name) {
    /* jshint unused: false */
    return ajax("https://api.parse.com/1/classes/Post").then(function(response){
      return response.results.map(function(post) {
        post.id = post.objectId;
        delete post.objectId;
        return post;
      });
    });
  },

  findQuery: function(name, query) {
    /* jshint unused: false */
    return ajax("https://api.parse.com/1/classes/post", {
      data: Ember.$.param({
              where: JSON.stringify(query)
            })
    }).then(function(response){
      return response.results.map(function(post) {
        post.id = post.objectId;
        delete post.objectId;
        return post;
      });
    });
  },

  destroy: function(name, record) {
    /* jshint unused: false */
    return ajax({
      url: "https://api.parse.com/1/classes/Post/" + record.id,
      type: "DELETE"
    });
  },

  save: function(name, record) {
    /* jshint unused: false */
    if(record.id) {
      return ajax({
        url: "https://api.parse.com/1/classes/Post/" + record.id,
        type: "PUT",
        data: JSON.stringify(record)
      }).then(function(response) {
        response.id = response.objectId;
        delete response.objectId;
        return response;
      });
    } else {
      return ajax({
        url: "https://api.parse.com/1/classes/Post",
        type: "POST",
        data: JSON.stringify(record)
      }).then(function(response) {
        record.updatedAt = response.updatedAt;
        return record;
      });
    }
  }
});
