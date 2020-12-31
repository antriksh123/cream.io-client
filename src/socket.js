import io from 'socket.io-client';
const sockets = io('/api');
export default sockets;