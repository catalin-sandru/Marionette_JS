import { CollectionView } from 'backbone.marionette';
import BetslipItemView from '../views/betslipItemView';

const BodyCollection = CollectionView.extend({
  tagName: 'ul',
  childView: BetslipItemView,

  // initialize() {
  //   console.log("asdasdas")
  // }
});

export default BodyCollection;