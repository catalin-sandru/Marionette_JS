import { CollectionView } from 'backbone.marionette';
import BodyItemView from '../views/bodyItemView';
import HeaderModel from '../models/headerModel';

const BodyCollectionView = CollectionView.extend({
  childView: BodyItemView,
  tagName: 'ul',
  // options: new HeaderModel(),

  childViewOptions: {
    selectedArr: new HeaderModel()
  },

  onChildviewSelectItem(childView) {
    this.model.attributes.selections.push(childView.model);
    const counter = this.model.get('selections').length
    console.log(counter)
    return this.model.set('counter', counter)
  },

  onRender() {
    // console.log(this)
  }
})

export default BodyCollectionView