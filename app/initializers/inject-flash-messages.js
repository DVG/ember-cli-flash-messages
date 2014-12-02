import flashMessagesService from 'flash-messages/services/flash-message-service';

export function initialize(container, application) {
  application.register('service:flash-messages', flashMessagesService, { singleton: true });
  application.inject('controller', 'flashes', 'service:flash-messages');
}

export default {
  name: 'inject-flash-messages',
  initialize: initialize
};
