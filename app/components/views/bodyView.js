import { View } from 'backbone.marionette';
import BodyCollection from '../collections/body_collection';

const BodyView = View.extend({
  template: '#betslip_body',

  regions: {
    body: {
      el: "section",
      replaceElement: true
    }
  },

  initialize() {
    console.log(this)
    this.showChildView('section', new BodyCollection({
      collection: this.collection.attributes
    }))
  }
});

export default BodyView;