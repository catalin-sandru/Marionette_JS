import { Application } from 'backbone.marionette';
import MainView from './components/views/mainView';


const App = Application.extend({
  region: '#app_hook',

  onStart() {
    this.getInitialSelections().then(res => {
      const mainView = new MainView({
        collection: res
      });
      const render = mainView.render()
      return this.showView(render)
    });
  },

  getInitialSelections() {
    const url = 'http://localhost:5000/rest/selections';
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(res => res.json())
        .then(json => resolve(new Backbone.Collection(json.response.selections)))
        .catch(err => console.error(err))
    })
  },

})

const app = new App();

app.start();
