const express = require('express');
const app = express();
const path = require('path');
 
if(process.env.NODE_ENV==='production'){
    app.use(express.static('client/build'));

    app.use('*',(req,res)=>{
        res.sendFile(path.join(__dirname,'client','build','index.html'));
    })
}

app.listen(process.env.PORT||8000,console.log('Server Has Started'));