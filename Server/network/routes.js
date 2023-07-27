import message from '../components/message/network.js'


const router = (server) => {
  
  server.use('/message', message);
  
}

export default router