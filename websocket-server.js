const WebSocket = require('ws');

const port = process.env.PORT || 8081;
const wss = new WebSocket.Server({ port });

wss.on('connection', (ws) => {
  console.log('WebSocket client connected');
  ws.on('message', (message) => {
    // Echo for now, customize as needed
    ws.send(message);
  });
  ws.on('close', () => {
    console.log('WebSocket client disconnected');
  });
});

console.log(`WebSocket server running on port ${port}`);
