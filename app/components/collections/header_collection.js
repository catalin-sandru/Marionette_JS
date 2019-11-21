import { View } from 'backbone.marionette';
import CounterView from '../views/counter_view';
import TitleView from '../views/title_view';
import header_template from '../../templates/item.jst'

const HeaderView = View.extend({
  el: '#betslip_header',

  template: header_template,

  regions: {
    title: "#header_title",
    counter: "#header_counter"
  },

  initialize() {
    const data = this.options
    this.showChildView('title', new TitleView(data));
    this.showChildView('counter', new CounterView(data));
  },

  // onRender() {
  //   const view = this.getChildView('title');
  //   console.log(view)
  // }
})

export default HeaderView;
