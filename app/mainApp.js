import { Application } from 'backbone.marionette';
import MainView from './components/views/mainView';
const io = require('socket.io-client')

const App = Application.extend({
  region: '#app_hook',
  collection: [],

  onStart() {
    this.getInitialSelections().then(res => {
      this.collection = new Backbone.Collection(res.selections);
      console.log(this.collection)

      const mainView = new MainView({
        collection: this.collection,
        title: res.eventName
      });

      this.attachWebSockets()
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

  attachWebSockets() {
    const socket = io("http://localhost:5000");
    return socket.on("selections", data => {
      // console.log(data)
      {data.type === 'price-change' ? 
        this.collection.models.forEach(model => {
          data.selections.forEach(el => {
            if(el.id === model.id) {
              model.set('price', el.price)
            }
          })
        })
        :
        this.collection.models.forEach(model => {
          data.selections.forEach(el => {
            if(el.id === model.id) {
              model.set('active', el.active)
            }
          })
        })
      }
    })
  },
})

const app = new App();

app.start();

