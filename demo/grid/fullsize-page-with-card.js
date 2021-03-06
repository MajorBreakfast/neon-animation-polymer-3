import '../../neon-shared-element-animatable-behavior.js';
import '../shared-styles.js';

Polymer({
  _template: `
    <style include="shared-styles"></style>
    <style>

      :host {
        display: block;
      }

      .fixed {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
      }

      .card {
        position: relative;
        margin: 200px 100px 0;
        height: 700px;
      }

    </style>

    <div id="fixed" class\$="[[_computeFixedBackgroundClass(color)]]"></div>
    <div id="card" class\$="[[_computeCardClass(color)]]"></div>
`,

  is: 'fullsize-page-with-card',

  behaviors: [
    Polymer.NeonSharedElementAnimatableBehavior
  ],

  properties: {

    color: {
      type: String
    },

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

    this.sharedElements = {
      'hero': this.$.card,
      'ripple': this.$.fixed
    };

    this.animationConfig = {
      'entry': [{
        name: 'ripple-animation',
        id: 'ripple',
        toPage: this,
      }, {
        name: 'hero-animation',
        id: 'hero',
        toPage: this,
        timing: {
          delay: 150
        }
      }],
      'exit': [{
        name: 'fade-out-animation',
        node: this.$.fixed
      }, {
        name: 'transform-animation',
        transformFrom: 'none',
        transformTo: 'translate(0px,-200vh) scale(0.9,1)',
        node: this.$.card
      }]
    };
  },

  _computeCardClass: function(color) {
    var cls = 'card';
    if (color) {
      cls += ' ' + color + '-300';
    }
    return cls;
  },

  _computeFixedBackgroundClass: function(color) {
    var cls = 'fixed';
    if (color) {
      cls += ' ' + color + '-100';
    }
    return cls;
  }
});
