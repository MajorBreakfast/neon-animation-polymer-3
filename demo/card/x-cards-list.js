import '../../neon-shared-element-animatable-behavior.js';
Polymer({
  _template: `
    <style>
      :host {
        display: block;
        overflow: hidden;
      }

      #placeholder {
        opacity: 0;
        background-color: grey;
        @apply --layout-fit;
      }
    </style>

    <div id="placeholder"></div>
    <div id="container">
      <slot name="div"></slot>
    </div>
`,

  is: 'x-cards-list',

  behaviors: [
    Polymer.NeonSharedElementAnimatableBehavior
  ],

  properties: {
    animationConfig: {
      type: Object
    }
  },

  attached: function() {
    if (this.animationConfig) {
      return;
    }

    this.animationConfig = {
      'entry': [{
        name: 'reverse-ripple-animation',
        id: 'reverse-ripple',
        toPage: this
      }],

      'exit': [{
        name: 'fade-out-animation',
        node: this.$.container,
        timing: {
          delay: 150,
          duration: 0
        }
      }, {
        name: 'ripple-animation',
        id: 'ripple',
        fromPage: this
      }]
    };
  }
});
