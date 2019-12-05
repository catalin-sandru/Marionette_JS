import { View } from 'backbone.marionette';
import itemTemplate from '../../templates/itemTemplate.jst'
import HeaderModel from '../models/headerModel';

const BodyItemView = View.extend({
  tagName: 'li',
  template: itemTemplate,
  // model: new HeaderModel(),

  ui: {
    button: '#button_1'
  },

  triggers: {
    'click button': 'select:item'
  },

  modelEvents: {
    'change:price': 'reRender'
  },

  onRender() {
    if(this.model.attributes.active === false) {
      const getBtn = this.getUI('button');
      getBtn.attr('disabled', 'disabled')
    }
    // console.log(this)
  },

  reRender: function() {
    this.render();
  },

  // selectBet() {
  //   const { selectedArr } = this.options
  //   const checkIfExist = selectedArr.find(id => id === this.model)
  //   !checkIfExist ? selectedArr.push(this.model) : console.log(this.model)
  // }
})

export default BodyItemView