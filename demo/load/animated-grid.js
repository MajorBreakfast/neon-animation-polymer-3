import '../../neon-shared-element-animatable-behavior.js';
import '../shared-styles.js';

Polymer({
  _template: `
    <style include="shared-styles">
      :host {
        display: block;
        background: #000;
      }

      .tile {
        display: inline-block;
        float: left;
        vertical-align: top;
        width: calc(100% / 6);
        height: calc(100% / 3);

        @apply --paper-font-title;
        @apply --layout-vertical;
        @apply --layout-center-center;
      }

      .tile:nth-of-type(1) {
        width: calc(100% / 3);
        height: calc(100% / 3 * 2);
      }

      .tile:nth-of-type(4) {
        width: calc(100% / 3);
      }

      .tile:nth-of-type(5) {
        width: calc(100% / 3);
        height: calc(100% / 3 * 2);
      }

      .tile:nth-of-type(8) {
        width: calc(100% / 3);
        height: calc(100% / 3);
      }

      .tile:nth-of-type(9) {
        position: absolute;
        top: calc(100% / 3 * 2);
        left: 0;
        width: calc(100% / 6);
        height: calc(100% / 3);
      }

      .tile:nth-of-type(10) {
        position: absolute;
        top: calc(100% / 3 * 2);
        left: calc(100% / 6);;
        width: calc(100% / 6);
        height: calc(100% / 3);
      }
    </style>

    <template is="dom-repeat" items="[[config]]">
      <div class\$="[[_computeTileClass(item.color)]]">
        <span>[[item.value]]</span>
      </div>
    </template>
`,

  is: 'animated-grid',

  behaviors: [
    Polymer.NeonSharedElementAnimatableBehavior
  ],

  properties: {

    config: {
      type: Array,
      value: function() {
        return [
          {value: 1, color: 'blue'},
          {value: 2, color: 'red'},
          {value: 3, color: 'blue'},
          {value: 4, color: 'green'},
          {value: 5, color: 'yellow'},
          {value: 6, color: 'blue'},
          {value: 7, color: 'red'},
          {value: 8, color: 'green'},
          {value: 9, color: 'yellow'},
          {value: 10, color: 'red'}
        ]
      }
    },

    animationConfig: {
      type: Object,
      value: function() {
        return {
          'entry': [{
            name: 'cascaded-animation',
            animation: 'transform-animation',
            transformFrom: 'translateY(100%)',
            transformTo: 'none',
            timing: {
              delay: 50
            }
          }]
        }
      }
    }

  },

  ready: function() {
    this.async(function() {
      var nodeList = Polymer.dom(this.root).querySelectorAll('.tile');
      this.animationConfig['entry'][0].nodes = Array.prototype.slice.call(nodeList);
    });
  },

  _computeTileClass: function(color) {
    return 'tile ' + color + '-300';
  }
});
