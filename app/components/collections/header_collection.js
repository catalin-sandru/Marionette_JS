import { View } from 'backbone.marionette';
import CounterView from '../views/counter_view';
import TitleView from '../views/title_view';

const HeaderView = View.extend({
  el: '#betslip_header',

  regions: {
    title: "#header_title",
    counter: "#header_counter"
  },

  initialize() {
    const data = this.options
    this.showChildView('title', new TitleView(data));
    this.showChildView('counter', new CounterView(data));
  },
})

export default HeaderView;
