import Ember from 'ember';
 
export default Ember.Object.extend({
  isSuccess:   Ember.computed.equal('type', 'success'),
  isInfo:      Ember.computed.equal('type', 'info'),
  isWarning:   Ember.computed.equal('type', 'warning'),
  isDanger:    Ember.computed.equal('type', 'danger'),
  
  init: function(){
    Ember.run.later(this, function(){
      this.destroy();
    }, Ember.get(this, 'timeout'));
  }
});
