import { View } from 'backbone.marionette';
import headerTemplate from '../../templates/headerTemplate.jst'
import HeaderModel from '../models/headerModel';
// const io = require('socket.io-client')


const HeaderView = View.extend({
  template: headerTemplate,
  // model: new HeaderModel(),

  initialize() {
    console.log(this)
    // this.attachWebSockets();
    // this.model.set('eventName', this.options.eventName)
    this.model.set('counter', this.model.attributes.counter.length)
  },

  // attachWebSockets() {
  //   const socket = io("http://localhost:5000");
  //   return socket.on("selections", data => {
  //     return data
  //   })
  // }
})

export default HeaderView