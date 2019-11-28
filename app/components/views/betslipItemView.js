import { View } from 'backbone.marionette';
import BestlipModel from '../models/betslip_model';

const BetslipItemView = View.extend({
  tagName: "li",
  template: _.template(`<h3 class="betslip_item--title"></h3>
                        <button class="betslip_item--button"></button>`),

  // model: new BestlipModel(),
  initialize() {
    console.log(this.template())
  }
});

export default BetslipItemView