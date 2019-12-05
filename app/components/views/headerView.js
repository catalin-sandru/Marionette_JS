import { View } from 'backbone.marionette';
import headerTemplate from '../../templates/headerTemplate.jst'


const HeaderView = View.extend({
  template: headerTemplate,

  modelEvents: {
    'change': 'render'
  },

  onRender() {
    const counter = this.model.attributes.selections.length
    this.model.set('counter', counter)
    console.log(this)
  }
})

export default HeaderView;
