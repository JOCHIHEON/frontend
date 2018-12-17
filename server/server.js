const express = require('express');
const fs = require('fs');
const http = require('http');
const https = require('https');
const privateKey = fs.readFileSync('/etc/letsencrypt/live/rbd.javajs.net/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/rbd.javajs.net/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/rbd.javajs.net/chain.pem', 'utf8');

const credentials = {
	key: privateKey,
	cert: certificate,
	ca: ca
};

const path = require('path');
const app = express();
app.use(express.static(__dirname + '/../build'));


// app.get('/.well-known/acme-challenge/DPJnipsvh_GDIZ3OreoZlrEhiG6JC-lj3Qi-OSZdUZw',(req,res)=>{
//     res.send('DPJnipsvh_GDIZ3OreoZlrEhiG6JC-lj3Qi-OSZdUZw.x6h1i378iq8HUW7op0fg_6hqXFzYofAwp0Mbn-i2oYA');
// })

app.get('/*', (req, res) => {                       
    res.sendFile(path.resolve(__dirname,'/git/frontend/build', 'index.html'));                               
});

const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

httpServer.listen(80, () => {
	console.log('HTTP Server running on port 80');
});

httpsServer.listen(441, () => {
	console.log('HTTPS Server running on port 443');
});