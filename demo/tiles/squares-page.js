import '../../neon-shared-element-animatable-behavior.js';

Polymer({
  _template: `
    <style>
      .header {
        height: 40%;
        background: var(--color-one);
      }

      .body {
        text-align: center;
        padding: 8px;
      }

      .square {
        display: inline-block;
        width: 150px;
        height: 150px;
        margin: 8px;
        background: var(--color-two);
      }
    </style>

    <div id="header" class="header"></div>

    <div class="body">
      <div class="square"></div>
      <div class="square"></div>
      <div class="square"></div>
      <div class="square"></div>
    </div>
`,

  is: 'squares-page',

  behaviors: [
    Polymer.NeonSharedElementAnimatableBehavior
  ],

  properties: {

    sharedElements: {
      type: Object
    },

    animationConfig: {
      type: Object
    }
  },

  attached: function() {
    if (this.animationConfig) {
      return;
    }

    this.sharedElements = { 'hero': this.$.header };
    var squares = Polymer.dom(this.root).querySelectorAll('.square');
    var squaresArray = Array.prototype.slice.call(squares);
    this.animationConfig = {
      'entry': [{
        name: 'hero-animation',
        id: 'hero',
        toPage: this
      }, {
        name: 'cascaded-animation',
        animation: 'transform-animation',
        transformFrom: 'translateY(100%)',
        nodes: squaresArray
      }],

      'exit': [{
        name: 'slide-up-animation',
        node: this.$.header
      }, {
        name: 'cascaded-animation',
        animation: 'transform-animation',
        transformTo: 'translateY(60vh)',
        nodes: squaresArray
      }]
    };
  }
});
