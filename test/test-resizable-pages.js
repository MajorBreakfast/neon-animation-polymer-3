import '../web-animations.js';
import '../neon-shared-element-animatable-behavior.js';

Polymer({
  _template: `

`,

  is: 'a-resizable-page',

  behaviors: [
    Polymer.NeonSharedElementAnimatableBehavior,
    Polymer.IronResizableBehavior
  ]
});

Polymer({
  _template: `

`,

  is: 'b-resizable-page',

  behaviors: [
    Polymer.NeonSharedElementAnimatableBehavior,
    Polymer.IronResizableBehavior
  ]
});

Polymer({
  _template: `

`,

  is: 'c-resizable-page',

  behaviors: [
    Polymer.NeonSharedElementAnimatableBehavior,
    Polymer.IronResizableBehavior
  ]
});
