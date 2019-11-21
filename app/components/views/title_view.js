import Mn from 'backbone.marionette';
import HeaderModel from '../models/header_model';

const TitleView = Mn.View.extend({
  el: '#header_title',
  template: _.template(`<%= eventName %>`),
  model: new HeaderModel(),
  
  initialize() {
    this.model.set("eventName", this.options.eventName);
  },
});

export default TitleView;