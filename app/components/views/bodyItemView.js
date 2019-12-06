import { View } from 'backbone.marionette';
import itemTemplate from '../../templates/itemTemplate.jst'

const BodyItemView = View.extend({
  tagName: 'li',
  template: itemTemplate,

  ui: {
    button: '#bet_button'
  },

  triggers: {
    'click button': 'select:item',
  },

  modelEvents: {
    'change': 'render',
  },

  onRender() {
    if(this.model.attributes.active === false) {
      const getBtn = this.getUI('button');
      getBtn.attr('disabled', 'disabled')
    }
  },
})

export default BodyItemView