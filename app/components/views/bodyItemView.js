import { View } from 'backbone.marionette';
import itemTemplate from '../../templates/itemTemplate.jst'
import HeaderModel from '../models/headerModel';

const BodyItemView = View.extend({
  tagName: 'li',
  template: itemTemplate,

  ui: {
    button: '#button_1'
  },

  triggers: {
    'click button': 'select:item'
  },

  modelEvents: {
    'change': 'render'
  },

  onRender() {
    if(this.model.attributes.active === false) {
      const getBtn = this.getUI('button');
      getBtn.attr('disabled', 'disabled')
      // console.log(getBtn.attr('disabled'))
    }
  }
})

export default BodyItemView