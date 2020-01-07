const http = require('http');
const PORT = 3000;
const express = require('express');
const app = express();
const server = http.createServer(app);

function greetingFor(whom) {
    let objectNames = {
        "oakley": "How wonderfully splendid it is to be in your presence again!",
        "chris": "Oh hey...",
        "milla": "Hello, "
    };
    const greeting = objectNames[whom] || `Hello, ${whom}!`;
    return greeting;

}

app.get('/:stuff', (req, res) => {
    justTheName = req.url.slice(1);
    res.send(greetingFor(justTheName)); 
})

server.listen(PORT, () => { 
    console.log('listening on port')
});