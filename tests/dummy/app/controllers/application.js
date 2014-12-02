import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    success: function() {
      this.get('flashes').success('Hello World!');
    }
  }
});
