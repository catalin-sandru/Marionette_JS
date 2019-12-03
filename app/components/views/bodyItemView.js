import { View } from 'backbone.marionette';
import itemTemplate from '../../templates/itemTemplate.jst'
import BodyModel from '../models/bodyModel';
const io = require('socket.io-client')


const BodyItemView = View.extend({
  tagName: 'li',
  template: itemTemplate,
  // model: ,

  ui: {
    button: '#button_1'
  },

  events: {
    'click button': 'functie'
  },

  onRender() {
    if(this.model.attributes.active === false) {
      const getBtn = this.getUI('button');
      getBtn.attr('disabled', 'disabled')
    }
    this.attachWebSockets();
  },
  
  attachWebSockets() {
    const socket = io("http://localhost:5000");
    return socket.on("selections", data => {
      // console.log(data)
    })
  },

  functie: function(e) {
    console.log(e)
  }
})

export default BodyItemView