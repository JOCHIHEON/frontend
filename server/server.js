const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/../build'));



function setHtml(req,res,next) {
    console.log(req.method);
    res.sendFile(path.join(__dirname+'/index.html'));
    next();
}

app.use('/*', setHtml);

app.listen(80,function(){
    console.log('start express server (port:80)');
})