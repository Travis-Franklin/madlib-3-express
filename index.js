const http = require('http');
const PORT = 3000;
const express = require('express');
const app = express();
const server = http.createServer(app);

let objectNames = {
    "oakley": "How wonderfully splendid it is to be in your presence again!",
    "chris": "Oh hey...",
    "milla": "Hello, "
}

app.get ('/:stuff', (req, res) => {
    // console.log(objectNames[]);
    // if (req.url.slice(1) === objectNames[0]) {
    //     res.send('it works to some degree');
    // } else{
    //     res.send('not found')
    // }
})

server.listen(PORT, () => { 
    console.log('listening on port')
});