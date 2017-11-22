import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { NeonAnimationBehavior } from '../neon-animation-behavior.js';

Polymer({

  is: 'scale-down-animation',

  behaviors: [
    NeonAnimationBehavior
  ],

  configure: function(config) {
    var node = config.node;

    var scaleProperty = 'scale(0, 0)';
    if (config.axis === 'x') {
      scaleProperty = 'scale(0, 1)';
    } else if (config.axis === 'y') {
      scaleProperty = 'scale(1, 0)';
    }

    this._effect = new KeyframeEffect(node, [
      {'transform': 'scale(1,1)'},
      {'transform': scaleProperty}
    ], this.timingFromConfig(config));

    if (config.transformOrigin) {
      this.setPrefixedProperty(node, 'transformOrigin', config.transformOrigin);
    }

    return this._effect;
  }

});
