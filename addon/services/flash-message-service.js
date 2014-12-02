import Ember from 'ember';
import FlashMessage from 'flash-messages/models/flash';
 
export default Ember.Object.extend({
  queue:   Ember.A([]),
  content: Ember.computed.alias('queue'),
  isEmpty: Ember.computed.equal('queue.length', 0),
  timeout: 2000,
  
  success: function(msg){
    this._add(msg, 'success');
  },
  
  info: function(msg){
    this._add(msg, 'info');
  },
  
  warning: function(msg){
    this._add(msg, 'warning');
  },
  
  danger: function(msg){
    this._add(msg, 'danger');
  },
  
  // private
  _add: function(msg, type){
    var flashes, flash;
    flashes = Ember.get(this, 'queue');
    flash   = this._newFlashMessage(msg, type);
    flashes.pushObject(flash);
  },
  
  _newFlashMessage: function(msg, type){
    var timeout;
    Ember.assert('Must pass a valid flash message', msg);
    type    = (typeof type === 'undefined') ? 'info' : type;
    timeout = Ember.get(this, 'timeout');
    
    return FlashMessage.create({
      type:    type,
      message: msg,
      timeout: timeout
    });
  },
  
  _queueDidChange: Ember.observer('queue.@each.isDestroyed', function(){
    var flashes, destroyed, timeout;
    flashes =  Ember.get(this, 'queue');
    timeout =  Ember.get(this, 'timeout');
    
    Ember.run.later(this, function(){
      destroyed = flashes.filterBy('isDestroyed', true);
      return flashes.removeObjects(destroyed);
    }, timeout);
  })
});
