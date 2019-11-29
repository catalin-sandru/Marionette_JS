import { View } from 'backbone.marionette';
import itemTemplate from '../../templates/itemTemplate.jst'

const BodyItemView = View.extend({
  tagName: 'li',
  template: itemTemplate,

  initialize() {
    console.log(this)
  }
})

export default BodyItemView