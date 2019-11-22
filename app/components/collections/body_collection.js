import { CollectionView } from 'backbone.marionette';
import BetslipItemView from '../views/betslipItemView';

const BodyView = CollectionView.extend({
  childView: BetslipItemView,
  collection: "",

  initialize() {
    console.log(this)
  }
});

export default BodyView;