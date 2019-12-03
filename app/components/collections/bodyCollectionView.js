import { CollectionView } from 'backbone.marionette';
import BodyItemView from '../views/bodyItemView';

const BodyCollectionView = CollectionView.extend({
  childView: BodyItemView,
  tagName: 'ul',

  childViewOptions: {
    selectedArr: []
  },

  onRender() {
    console.log(this)
  }
})

export default BodyCollectionView