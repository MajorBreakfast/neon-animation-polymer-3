import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { NeonAnimatableBehavior } from './neon-animatable-behavior.js';

/**
 * Use `Polymer.NeonSharedElementAnimatableBehavior` to implement elements containing shared element
 * animations.
 * @polymerBehavior Polymer.NeonSharedElementAnimatableBehavior
 */
const NeonSharedElementAnimatableBehaviorImpl = {

  properties: {

    /**
     * A map of shared element id to node.
     */
    sharedElements: {
      type: Object,
      value: {}
    }

  }

};

/** @polymerBehavior Polymer.NeonSharedElementAnimatableBehavior */
export const NeonSharedElementAnimatableBehavior = [
  NeonAnimatableBehavior,
  NeonSharedElementAnimatableBehaviorImpl
];
