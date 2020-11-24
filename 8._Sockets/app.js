const express = require("express");
const app = express();

const server = require('http').createServer(app);

const io = require("socket.io")(server);

io.on("connection", (socket) => {
    socket.on("client changed color", ({ data }) => {
        console.log(data);
    });
});

app.get("/colorpicker", (req, res) => {
    return res.sendFile(__dirname + "/colorpicker.html");
});

server.listen(8080, (error) => {
    console.log(`Server is running on port ${8080}`)
});
