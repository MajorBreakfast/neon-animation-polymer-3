import '../../neon-animation-runner-behavior.js';
import '../../animations/scale-down-animation.js';

Polymer({
  _template: `
    <style>
      :host {
        display: inline-block;
        border-radius: 50%;
        width: 300px;
        height: 300px;
        background: orange;
      }
    </style>
    <slot></slot>
`,

  is: 'my-animatable',

  behaviors: [
    Polymer.NeonAnimationRunnerBehavior
  ],

  properties: {

    animationConfig: {
      type: Object,
      value: function() {
        return {
          name: 'scale-down-animation',
          node: this
        }
      }
    }

  },

  listeners: {
    'neon-animation-finish': '_onNeonAnimationFinish'
  },

  animate: function() {
    this.playAnimation();
  },

  _onNeonAnimationFinish: function() {
    console.log('animation finish!');
  }
});
