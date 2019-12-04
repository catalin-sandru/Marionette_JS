import { View } from 'backbone.marionette';
import headerTemplate from '../../templates/headerTemplate.jst'
import HeaderModel from '../models/headerModel';


const HeaderView = View.extend({
  template: headerTemplate,

  initialize() {
    console.log(this)
    // this.model.set('eventName', this.options.eventName)
    this.model.set('counter', this.model.attributes.counter.length)
  },
})

export default HeaderView;
