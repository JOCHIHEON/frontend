const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/../build'));


app.get('/.well-known/acme-challenge/DPJnipsvh_GDIZ3OreoZlrEhiG6JC-lj3Qi-OSZdUZw',(req,res)=>{
    res.send('DPJnipsvh_GDIZ3OreoZlrEhiG6JC-lj3Qi-OSZdUZw.x6h1i378iq8HUW7op0fg_6hqXFzYofAwp0Mbn-i2oYA');
})
// app.get('/*', (req, res) => {                       
//     res.sendFile(path.resolve(__dirname,'/git/frontend/build', 'index.html'));                               
// });

app.listen(80,function(){
    console.log('start express server (port:80)');
})