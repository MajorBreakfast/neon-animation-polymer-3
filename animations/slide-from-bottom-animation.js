import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { NeonAnimationBehavior } from '../neon-animation-behavior.js';

Polymer({

  is: 'slide-from-bottom-animation',

  behaviors: [
    NeonAnimationBehavior
  ],

  configure: function(config) {
    var node = config.node;

    this._effect = new KeyframeEffect(node, [
      {'transform': 'translateY(100%)'},
      {'transform': 'translateY(0)'}
    ], this.timingFromConfig(config));

    if (config.transformOrigin) {
      this.setPrefixedProperty(node, 'transformOrigin', config.transformOrigin);
    } else {
      this.setPrefixedProperty(node, 'transformOrigin', '50% 0');
    }

    return this._effect;
  }

});
