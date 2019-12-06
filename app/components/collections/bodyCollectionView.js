import { CollectionView } from 'backbone.marionette';
import BodyItemView from '../views/bodyItemView';
import HeaderModel from '../models/headerModel';

const BodyCollectionView = CollectionView.extend({
  childView: BodyItemView,
  tagName: 'ul',

  childViewEvents: {
    render: function(childView) {
      const { selections } = this.model.attributes;
      const { cid } = childView.model;
      const { active } = childView.model.attributes;

      if(selections.includes(cid) && active === false) {
        this.removeSelected(childView);
        return this.updateCounter()
      } 
    }
  },

  onChildviewSelectItem(childView) {
    const { selections } = this.model.attributes;
    const { cid } = childView.model;

    {selections.includes(cid)
    ?
      this.removeSelected(childView)
    :
      selections.push(cid)};
    
    return this.updateCounter()
  },

  removeSelected(childView) {
    const { selections } = this.model.attributes;
    const { cid } = childView.model

    const index = selections.indexOf(cid);
    return selections.splice(index, 1);
  },

  updateCounter() {
    const counter = this.model.get('selections').length;
    return this.model.set('counter', counter);
  }
})

export default BodyCollectionView