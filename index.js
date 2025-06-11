const WebSocket = require("ws");
const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on("connection", function connection(ws) {
  console.log("Client connected");
  ws.on("message", function incoming(message) {
    console.log("received:", message);
    ws.send(`Echo: ${message}`);
  });
});

server.listen(process.env.PORT || 3000, function () {
  console.log("WebSocket server started on port 3000");
});