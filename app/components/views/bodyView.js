import { View } from 'backbone.marionette';
import BodyCollection from '../collections/body_collection';

const BodyView = View.extend({
  // el: '#betslip_list',
  template: '#body_template',

  regions: {
    name: '.betslip_item--title',
    button: '.betslip_item--button'
  },

  initialize() {
    // console.log(this)
    const bodyView = new BodyCollection({
      collection: this.collection
    });
    this.showChildView("name", bodyView);
  },
});

export default BodyView;