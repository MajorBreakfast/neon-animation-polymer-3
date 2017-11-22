import '../../neon-animation-runner-behavior.js';

Polymer({
  _template: `
    <style>
      :host {
        display: none;
        padding: 16px;
        background: white;
        color: black;

        @apply --shadow-elevation-2dp;
      }
    </style>
    <slot></slot>
`,

  is: 'animated-dropdown',

  behaviors: [
    Polymer.NeonAnimationRunnerBehavior
  ],

  properties: {

    animationConfig: {
      type: Object,
      value: function() {
        return {
          'entry': [{
            name: 'scale-up-animation',
            node: this,
            transformOrigin: '0 0'
          }],
          'exit': [{
            name: 'fade-out-animation',
            node: this
          }]
        }
      }
    },

    _showing: {
      type: Boolean,
      value: false
    }

  },

  listeners: {
    'neon-animation-finish': '_onAnimationFinish'
  },

  _onAnimationFinish: function() {
    if (this._showing) {
    } else {
      this.style.display = '';
    }
  },

  show: function() {
    this.style.display = 'inline-block';
    this._showing = true;
    this.playAnimation('entry');
  },

  hide: function() {
    this._showing = false;
    this.playAnimation('exit');
  }
});
