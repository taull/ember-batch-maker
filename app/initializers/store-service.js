export function initialize(container, application) {
  application.inject('route', 'storeService', 'service:store');
  application.inject('controller', 'storeService', 'service:store');
}

export default {
  name: 'store-service',
  initialize: initialize
};
