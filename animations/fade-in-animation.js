import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { NeonAnimationBehavior } from '../neon-animation-behavior.js';

Polymer({

  is: 'fade-in-animation',

  behaviors: [
    NeonAnimationBehavior
  ],

  configure: function(config) {
    var node = config.node;
    this._effect = new KeyframeEffect(node, [
      {'opacity': '0'},
      {'opacity': '1'}
    ], this.timingFromConfig(config));
    return this._effect;
  }

});
