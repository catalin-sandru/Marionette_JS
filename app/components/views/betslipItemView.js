import { View } from 'backbone.marionette';
import BestlipModel from '../models/betslip_model';

const BetslipItemView = View.extend({
  tagName: "li",
  template: _.template(`<div>
                          <h6> <%= name %> </h6>
                          <button disabled="<%= active %>"> <%= price %> </button>
                      </div>`),
  // model: new BestlipModel(),

  initialize() {
    console.log(this)
  }
});

export default BetslipItemView