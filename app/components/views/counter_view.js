import Mn from 'backbone.marionette';
import HeaderModel from '../models/header_model';

const CounterView = Mn.View.extend({
  el: '#header_counter',
  template: _.template(`<%= counter %>`),
  model: new HeaderModel(),

  initialize: function() {
    this.model.set("counter", 666)
  }
})

export default CounterView;