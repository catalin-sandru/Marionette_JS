import { CollectionView } from 'backbone.marionette';
import BodyItemView from '../views/bodyItemView';

const BodyCollectionView = CollectionView.extend({
  childView: BodyItemView,
  tagName: 'ul'
})

export default BodyCollectionView