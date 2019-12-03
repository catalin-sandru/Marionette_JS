import { Model } from 'backbone';

const HeaderModel = Model.extend({
  defaults: {
    counter: [],
    eventName: ""
  },
  initialize() {

  }
})

export default HeaderModel