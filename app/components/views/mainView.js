import { View } from 'backbone.marionette';
import mainTemplate from '../../templates/mainTemplate.jst'
import BodyCollectionView from '../collections/bodyCollectionView';

const MainView = View.extend({
  template: mainTemplate,
  id: 'betslip',

  regions: {
    header: '#betslip_header',
    body: '#betslip_body'
  },

  onRender() {
    this.showChildView('body', new BodyCollectionView({
      collection: this.collection
    }))
    console.log(this)
  }
});

export default MainView