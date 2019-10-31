import './styles/application.css';
import App from 'components/App';

const io = require('socket.io-client')

document.addEventListener('DOMContentLoaded', () => {
  // const socket = io("http://localhost:5000");
  // socket.on('selections', data => {
  //   console.log(data);
  // });


  const app = new App();
  app.start();
});
