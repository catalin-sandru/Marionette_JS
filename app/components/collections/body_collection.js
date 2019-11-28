import { CollectionView } from 'backbone.marionette';
import BetslipItemView from '../views/betslipItemView';
import BestlipModel from '../models/betslip_model';

const BodyCollection = CollectionView.extend({
  el: '#betslip_list',
  // tagName: 'ul',
  childView: BetslipItemView,
  // model: new BestlipModel(),

  initialize() {
    // console.log(this)
  }
});

export default BodyCollection;