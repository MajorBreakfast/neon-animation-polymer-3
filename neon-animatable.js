import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { IronResizableBehavior } from '@polymer/iron-resizable-behavior/iron-resizable-behavior.js';
import './neon-animatable-behavior.js';

Polymer({
  _template: `
    <style>
      :host {
        display: block;
      }
    </style>

    <slot></slot>
`,

  is: 'neon-animatable',

  behaviors: [
    NeonAnimatableBehavior,
    IronResizableBehavior
  ]
});
