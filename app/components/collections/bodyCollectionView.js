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
    const { selections } = this.model.attributes;
    const { cid } = childView.model
    
    if(selections.includes(cid)) {
      const index = selections.indexOf(cid)
      selections.splice(index, 1)
    } else {
      selections.push(cid)
    }

    const counter = this.model.get('selections').length;
    return this.model.set('counter', counter);
  },

  onRender() {
    console.log(this)
  }
})

export default BodyCollectionView