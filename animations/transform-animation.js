import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { NeonAnimationBehavior } from '../neon-animation-behavior.js';

Polymer({

  is: 'transform-animation',

  behaviors: [
    NeonAnimationBehavior
  ],

  /**
   * @param {{
   *   node: !Element,
   *   transformOrigin: (string|undefined),
   *   transformFrom: (string|undefined),
   *   transformTo: (string|undefined),
   *   timing: (Object|undefined)
   * }} config
   */
  configure: function(config) {
    var node = config.node;
    var transformFrom = config.transformFrom || 'none';
    var transformTo = config.transformTo || 'none';

    this._effect = new KeyframeEffect(node, [
      {'transform': transformFrom},
      {'transform': transformTo}
    ], this.timingFromConfig(config));

    if (config.transformOrigin) {
      this.setPrefixedProperty(node, 'transformOrigin', config.transformOrigin);
    }

    return this._effect;
  }

});
