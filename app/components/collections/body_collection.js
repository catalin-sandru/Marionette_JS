import { CollectionView } from 'backbone.marionette';
import BetslipItemView from '../views/betslipItemView';

const BodyView = CollectionView.extend({
  template: '#app_view',
  childView: BetslipItemView,
  // collection: this.options,

  initialize() {
    console.log(this)
  },
});

export default BodyView;