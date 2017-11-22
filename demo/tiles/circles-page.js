import '../../neon-shared-element-animatable-behavior.js';

Polymer({
  _template: `
    <style>
      :host {
        @apply --layout-horizontal;
        @apply --layout-center-center;
      }

      .circle {
        display: inline-block;
        box-sizing: border-box;
        width: 100px;
        height: 100px;
        margin: 16px;
        border-radius: 50%;
        background: var(--color-one);
      }
    </style>

    <div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
    </div>
`,

  is: 'circles-page',

  behaviors: [
    Polymer.NeonSharedElementAnimatableBehavior
  ],

  properties: {

    animationConfig: {
      type: Object
    }
  },

  listeners: {
    'click': '_onClick'
  },

  attached: function() {
    if (this.animationConfig) {
      return;
    }

    var circles = Polymer.dom(this.root).querySelectorAll('.circle');
    var circlesArray = Array.prototype.slice.call(circles);
    this.animationConfig = {
      'entry': [{
        name: 'cascaded-animation',
        animation: 'scale-up-animation',
        nodes: circlesArray
      }],

      'exit': [{
        name: 'hero-animation',
        id: 'hero',
        fromPage: this
      }, {
        name: 'cascaded-animation',
        animation: 'scale-down-animation'
      }]
    };
  },

  _onClick: function(event) {
    var target = Polymer.dom(event).rootTarget;

    if (target.classList.contains('circle')) {
      // configure the page animation
      this.sharedElements = {
        'hero': target
      };

      var nodesToScale = [];
      var circles = Polymer.dom(this.root).querySelectorAll('.circle');

      for (var node, index = 0; node = circles[index]; index++) {
        if (node !== event.target) {
          nodesToScale.push(node);
        }
      }

      this.animationConfig['exit'][1].nodes = nodesToScale;
      this.fire('circle-click');
    }
  }
});
