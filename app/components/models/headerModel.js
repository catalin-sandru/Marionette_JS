import { Model } from 'backbone';

const HeaderModel = Model.extend({
  defaults: {
    counter: 0,
    eventName: ""
  },
  initialize() {
    
  }
})

export default HeaderModel