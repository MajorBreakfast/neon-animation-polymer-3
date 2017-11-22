import '../../neon-animatable-behavior.js';

Polymer({
  _template: `
    <style>
      :host {
        @apply --layout-vertical;
      }

      .main {
        @apply --layout-flex;
        @apply --layout-scroll;
      }

      iron-icon {
        color: var(--google-grey-500);
      }

      app-toolbar {
        color: white;
        background-color: var(--google-blue-500);
      }
    </style>
    <app-toolbar>
      <paper-icon-button id="button" icon="arrow-back"></paper-icon-button>
    </app-toolbar>

    <div class="main">

        <template is="dom-repeat" items="[[data]]">

          <paper-item>
            <paper-item-body two-line="">
              <div>[[item.fileName]]</div>
              <div secondary="">[[item.modifiedDate]]</div>
            </paper-item-body>
            <iron-icon icon="info"></iron-icon>
          </paper-item>

        </template>

    </div>
`,

  is: 'list-view',

  behaviors: [
    Polymer.NeonAnimatableBehavior
  ],

  listeners: {
    'click': '_onClick'
  },

  properties: {

    data: {
      type: Array,
      value: function() {
        return [];
      }
    },

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
        name: 'fade-in-animation',
        node: this.$.button
      }],

      'exit': [{
        name: 'fade-out-animation',
        node: this.$.button
      }, {
        name: 'hero-animation',
        id: 'hero',
        fromPage: this
      }]
    };
  },

  _onClick: function(event) {
    var target = Polymer.dom(event).rootTarget;

    // configure the page animation
    this.sharedElements = {
      'hero': target,
    };

    this.fire('item-click', {
      item: target,
    });
  }
});
