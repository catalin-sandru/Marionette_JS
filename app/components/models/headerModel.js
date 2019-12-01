import { Model } from 'backbone';

const HeaderModel = Model.extend({
  defaults: {
    counter: 0,
    eventName: ""
  }
})

export default HeaderModel