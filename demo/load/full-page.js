import '../../neon-animatable-behavior.js';
import '../../neon-animation-runner-behavior.js';
import './animated-grid.js';

Polymer({
  _template: `
    <style>
      :host {
        background: black;
        visibility: hidden;
        @apply --layout-vertical;
      }

      .toolbar {
        background: #9c27b0;
        height: 72px;
        z-index: 1;
        @apply --shadow-elevation-2dp;
      }

      animated-grid {
        height: calc(100% - 72px);
        @apply --layout-flex;
      }
    </style>

    <div id="toolbar" class="toolbar"></div>
    <animated-grid id="grid"></animated-grid>
`,

  is: 'full-page',

  behaviors: [
    Polymer.NeonAnimatableBehavior,
    Polymer.NeonAnimationRunnerBehavior
  ],

  properties: {

    animationConfig: {
      type: Object
    }
  },

  attached: function() {
    this.animationConfig = this.animationConfig || {
      'entry': [{
        name: 'slide-from-top-animation',
        node: this.$.toolbar
      }, {
        animatable: this.$.grid,
        type: 'entry'
      }]
    };
  },

  show: function() {
    this.style.visibility = 'visible';
    this.playAnimation('entry');
  }
});
