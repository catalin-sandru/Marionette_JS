import { Model } from 'backbone';

const BestlipModel = Model.extend({
  defaults: {
    selections: {
      name: "",
      price: 0,
      active: true
    },
    type: ""
  }
})

export default BestlipModel