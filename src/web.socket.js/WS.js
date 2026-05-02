import {io} from 'socket.io-client';
export function connectWebSocket(){
    return io('https://spelltalk-backend.onrender.com');
}