import { View } from 'backbone.marionette';
import itemTemplate from '../../templates/itemTemplate.jst'

const BodyItemView = View.extend({
  tagName: 'li',
  template: itemTemplate,

  ui: {
    button: '#button_1'
  },

  modelEvents: {
    'change:price': 'functie'
  },

  onRender() {
    if(this.model.attributes.active === false) {
      const getBtn = this.getUI('button');
      getBtn.attr('disabled', 'disabled')
    }
  },

  functie: function() {
    this.render();
  }
})

export default BodyItemView