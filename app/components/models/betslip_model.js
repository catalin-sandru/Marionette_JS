import { Model } from 'backbone';

const BestlipModel = Model.extend({
  defaults: {
    selections: {},
    type: ""
  }
})

export default BestlipModel