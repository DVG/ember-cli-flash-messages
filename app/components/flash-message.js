import Ember from 'ember';
export default Ember.Component.extend({
  classNames:        [ 'alert' ],
  classNameBindings: [ 'alertType' ],
  
  alertType: Ember.computed('flash.type', function(){
    return 'alert-' + Ember.get(this, 'flash.type');
  })
});
