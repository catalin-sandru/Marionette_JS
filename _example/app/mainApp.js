import Mn from 'backbone.marionette';
import listItemTemplate from './templates/header_template.jst'

const Coll = new Backbone.Collection([
  {name: "gigi", age: 22},
  {name: "kent", age: 33},
]);

// const Collection = Coll.extend([
//   {unit: "aaaa", active: false}
// ])

const View = Mn.View.extend({
  tagName: "li",
  template: listItemTemplate,
  initialize() {
    // this.model.set("name", "")
    console.log(this)
  }
});

const CollectionView = Mn.CollectionView.extend({
  childView: View,
  tagName: 'ul',

  initialize() {
    console.log(this)
  }
});


const MainView = Mn.View.extend({
  template: '#template',
  // tagName: 'ul',
  regions: {
    gigi: '#gigi',
    kent: '#kent'
  },

  onRender() {
    this.showChildView('gigi', new CollectionView({
      collection: this.collection
    }))
    console.log(this)
  }
})

const mainView = new MainView({
  collection: Coll
});

mainView.render();


const App = Mn.Application.extend({
  region: '#app_hook',

  onStart() {
    console.log(this)
    this.showView(mainView);
  }
});

const app = new App();

app.start();
