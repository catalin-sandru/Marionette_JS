import Mn from 'backbone.marionette';
// import CounterView from './components/views/counter_view';
import HeaderView from './components/collections/header_collection';
import HeaderModel from './components/models/header_model';
const io = require('socket.io-client');

const App = Mn.Application.extend({
  region: '#app_hook',

  initialize: function() {
    // this.HeaderModel = new Backbone.Model();
    console.log(this)
  },
  
  onBeforeStart: function () {
    this.getSelectionsData()
      .then(res => {
        const headerView = new HeaderView(res.response)
        this.showView(headerView)
      })
      .catch(err => console.error(err));
  },
  
  onStart() {  
    this.attachWebSockets();
  },

  getSelectionsData(){
    return new Promise((resolve, reject) => {
      //API CALL TO GET SELECTIONS DATA
      const api = 'http://localhost:5000/rest/selections';
      return fetch(api)
        .then(res => res.json())
        .then(json => resolve(this.data = json))
        .catch(err => console.error(err));

      // resolve with the data received from the api call
      //then you initialize new HeaderView with data on a Backbone Model/Collection depending on the struture that you are coding
    })
  },
  
  attachWebSockets() {
    const socket = io("http://localhost:5000");
    return socket.on('selections', data => {
      // console.log(data);
      return data
    });
  }
});

const app = new App();

app.start();
