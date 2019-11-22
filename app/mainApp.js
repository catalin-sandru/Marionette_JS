import Mn from 'backbone.marionette';
import HeaderView from './components/collections/header_collection';
import BetslipModel from './components/models/betslip_model';
import BodyView from './components/collections/body_collection';

const io = require('socket.io-client');

const App = Mn.Application.extend({
  region: '#app_hook',

  initialize: function() {
    this.attachWebSockets();
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
    console.log(this)
    this.showView(new BodyView(this.model))
  },

  getSelectionsData(){
    return new Promise((resolve, reject) => {
      //API CALL TO GET SELECTIONS DATA
      const api = 'http://localhost:5000/rest/selections';
      return fetch(api)
        .then(res => res.json())
        .then(json => resolve(this.data = json))
        .catch(err => console.error(err));
    })
  },
  
  attachWebSockets() {
    const socket = io("http://localhost:5000");
    return socket.on('selections', data => {
      console.log(this);
      return this.model = new Backbone.Model(data)
    });
  }
});

const app = new App();

app.start();
