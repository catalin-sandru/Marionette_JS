import { Application } from 'backbone.marionette';
import MainView from './components/views/mainView';


const App = Application.extend({
  region: '#app_hook',

  // onBeforeStart() {
  //   this.attachWebSockets()
  // },

  onStart() {
    this.getInitialSelections().then(res => {
      const collection = new Backbone.Collection(res.selections);
      const mainView = new MainView({
        collection: collection,
        title: res.eventName
      });
      const render = mainView.render();
      return this.showView(render)
    });
  },

  getInitialSelections() {
    const url = 'http://localhost:5000/rest/selections';
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(res => res.json())
        .then(json => resolve(json.response))
        .catch(err => console.error(err))
    })
  },
})

const app = new App();

app.start();
