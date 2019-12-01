import { View } from 'backbone.marionette';
import headerTemplate from '../../templates/headerTemplate.jst'
import HeaderModel from '../models/headerModel';
const io = require('socket.io-client')

const HeaderView = View.extend({
  template: headerTemplate,
  model: new HeaderModel(),

  initialize() {
    this.attachWebSockets();
    this.model.set('eventName', this.options.title)
  },

  attachWebSockets() {
    const socket = io("http://localhost:5000");
    return socket.on("selections", data => {
      console.log(this)
      return this.data = data
    })
  }
})

export default HeaderView