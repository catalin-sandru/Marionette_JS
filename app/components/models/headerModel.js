import { Model } from 'backbone';

const HeaderModel = Model.extend({
  defaults: {
    counter: 0,
    selections: [],
    eventName: ""
  }
})

export default HeaderModel