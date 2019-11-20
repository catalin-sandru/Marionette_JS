import Mn from 'backbone.marionette';
import HeaderModel from '../models/header_model';

const CounterView = Mn.View.extend({
  el: '#header_counter',
  template: _.template(`<%= counter %>`),
  model: new HeaderModel(),

  // initialize: function() {
  //   // this.model.set("counter", this.model.counter)
  //   // console.log(this)
  //   // this.render();
  // }
})

export default CounterView;