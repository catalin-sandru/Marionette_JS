import { Model } from 'backbone';

const BodyModel = Model.extend({
  defaults: {
    name: "",
    price: 0,
    active: true,
    selected: false
  },
});

export default BodyModel;