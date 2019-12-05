import { View } from 'backbone.marionette';
import headerTemplate from '../../templates/headerTemplate.jst'


const HeaderView = View.extend({
  template: headerTemplate,

  modelEvents: {
    'change': 'reRender'
  },

  onRender() {
    // this.model.set('eventName', this.options.eventName)
    const counter = this.model.attributes.selections.length
    this.model.set('counter', counter)
    console.log(this)
  },
  
  reRender() {
    this.render()
    console.log("event fired")
  }
})

export default HeaderView;
