import { View } from 'backbone.marionette';
import itemTemplate from '../../templates/itemTemplate.jst'

const BodyItemView = View.extend({
  tagName: 'li',
  template: itemTemplate,
  ui: {
    button: '#button_1'
  },

  events: {
    'click button': 'functie'
  },

  functie: function(e) {
    console.log(this)
  }
})

export default BodyItemView