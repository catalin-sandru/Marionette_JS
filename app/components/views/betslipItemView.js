import { View } from 'backbone.marionette';
import BestlipModel from '../models/betslip_model';

const BetslipItemView = View.extend({
  el: '#betslip_item',
  template: _.template(`<div>
                          <h6> <%= name %> </h6>
                          <button disabled="<%= active %>"> <%= price %> </button>
                      </div>`),
  model: BestlipModel
});

export default BetslipItemView