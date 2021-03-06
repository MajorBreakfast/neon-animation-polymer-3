import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { NeonAnimationBehavior } from '../neon-animation-behavior.js';

Polymer({

  is: 'opaque-animation',

  behaviors: [
    NeonAnimationBehavior
  ],

  configure: function(config) {
    var node = config.node;
    this._effect = new KeyframeEffect(node, [
      {'opacity': '1'},
      {'opacity': '1'}
    ], this.timingFromConfig(config));
    node.style.opacity = '0';
    return this._effect;
  },

  complete: function(config) {
    config.node.style.opacity = '';
  }

});
