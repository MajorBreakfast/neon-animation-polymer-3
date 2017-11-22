import '../../neon-animation-runner-behavior.js';
import '../../animations/scale-up-animation.js';
import '../../animations/fade-out-animation.js';

Polymer({
  _template: `
    <style>
      :host {
        display: none;
        padding: 16px;
        background: white;
        color: black;
        margin: 0 auto;
        z-index: 100;
        position: absolute;
        @apply --shadow-elevation-2dp;
      }
    </style>
    <slot></slot>
`,

  is: 'my-dialog',

  behaviors: [
    Polymer.NeonAnimationRunnerBehavior
  ],

  properties: {

    opened: {
      type: Boolean
    },

    animationConfig: {
      type: Object,
      value: function() {
        return {
          'entry': [{
            name: 'scale-up-animation',
            node: this
          }],
          'exit': [{
            name: 'fade-out-animation',
            node: this
          }]
        }
      }
    }

  },

  listeners: {
    'neon-animation-finish': '_onAnimationFinish'
  },

  _onAnimationFinish: function() {
    if (!this.opened) {
      this.style.display = '';
    }
  },

  show: function() {
    this.opened = true;
    this.style.display = 'inline-block';
    this.playAnimation('entry');
  },

  hide: function() {
    this.opened = false;
    this.playAnimation('exit');
  }
});
