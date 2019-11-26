import { View } from 'backbone.marionette';

const BetslipItemView = View.extend({
  tagName: "li",
  template: _.template(`<div>
                          <h6> <%= name %> </h6>
                          <button disabled="<%= active %>"> <%= price %> </button>
                      </div>`),
  initialize() {
    console.log(this)
  }
});

export default BetslipItemView