import { Model } from 'backbone';

const HeaderModel = Model.extend({
  defaults: {
    counter: [],
    eventName: ""
  }
})

export default HeaderModel