import { Model } from 'backbone';

const BodyModel = Model.extend({
  defaults: {
    selections: [],
    type: ""
  },
});

export default BodyModel;