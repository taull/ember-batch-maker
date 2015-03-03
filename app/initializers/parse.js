import Ember from 'ember';

export function initialize(/* container, application */) {
  Ember.$.ajaxSetup ({
    headers: {
      "X-Parse-Application-Id": 'mi6hyQQx0eyZPeMmqVHAyM6LU1yGfH6gYRurZTq8',
      "X-Parse-REST-API-Key": 'Bc3Y3fi9UCzMu3CR0w26zDf9v4r32N0BNnzTnUme'
    }
  });
}

export default {
  name: 'parse',
  initialize: initialize
};
