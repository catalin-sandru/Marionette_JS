import { View } from 'backbone.marionette';
import mainTemplate from '../../templates/mainTemplate.jst'
import BodyCollectionView from '../collections/bodyCollectionView';
import HeaderView from './headerView';
import HeaderModel from '../models/headerModel';

const MainView = View.extend({
  template: mainTemplate,
  id: 'betslip',

  regions: {
    header: '#betslip_header',
    body: '#betslip_body'
  },

  initialize() {
    this.model = new HeaderModel({
      counter: [],
      eventName: this.options.title
    });

    // this.attachWebSockets();
  },
  
  onRender() {
    this.showChildView('body', new BodyCollectionView({
      collection: this.collection
    }));
    
    console.log(this)
    
    this.showChildView('header', new HeaderView({
      model: this.model
    }));
  }
});

export default MainView
